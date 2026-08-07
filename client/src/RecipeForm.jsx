import { useState } from 'react';

const CATEGORIES = ['breads', 'cakes', 'cookies', 'pastries', 'pies', 'other'];

const emptyForm = {
  title: '', description: '', category: '', servings: '', prep_time: '', cook_time: '',
  ingredients: '', instructions: '',
};

function toForm(r) {
  return {
    title: r.title ?? '',
    description: r.description ?? '',
    category: r.category ?? '',
    servings: r.servings ?? '',
    prep_time: r.prep_time ?? '',
    cook_time: r.cook_time ?? '',
    ingredients: Array.isArray(r.ingredients) ? r.ingredients.join('\n') : '',
    instructions: Array.isArray(r.instructions) ? r.instructions.join('\n') : '',
  };
}

function validate(form) {
  const errs = {};
  if (!form.title.trim()) errs.title = 'Title is required';
  if (!form.ingredients.trim()) errs.ingredients = 'At least one ingredient is required';
  if (!form.instructions.trim()) errs.instructions = 'At least one instruction step is required';
  if (form.servings && (!/^\d+$/.test(form.servings) || Number(form.servings) < 1))
    errs.servings = 'Servings must be a whole number greater than 0';
  if (form.prep_time && !/^\d+$/.test(form.prep_time))
    errs.prep_time = 'Prep time must be a number in minutes';
  if (form.cook_time && !/^\d+$/.test(form.cook_time))
    errs.cook_time = 'Cook time must be a number in minutes';
  return errs;
}

export default function RecipeForm({ recipe, onSave, onCancel }) {
  const [form, setForm] = useState(recipe ? toForm(recipe) : emptyForm);
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');
  const [saving, setSaving] = useState(false);

  function set(field) {
    return (e) => {
      setForm((f) => ({ ...f, [field]: e.target.value }));
      if (errors[field]) setErrors((e) => { const n = { ...e }; delete n[field]; return n; });
    };
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setApiError('');
    setSaving(true);
    try {
      await onSave({
        title: form.title.trim(),
        description: form.description.trim() || undefined,
        category: form.category || undefined,
        servings: form.servings ? Number(form.servings) : undefined,
        prep_time: form.prep_time ? Number(form.prep_time) : undefined,
        cook_time: form.cook_time ? Number(form.cook_time) : undefined,
        ingredients: form.ingredients.split('\n').map((s) => s.trim()).filter(Boolean),
        instructions: form.instructions.split('\n').map((s) => s.trim()).filter(Boolean),
      });
    } catch (err) {
      setApiError(err.message);
    } finally {
      setSaving(false);
    }
  }

  function field(name, label, element, required = false) {
    const invalid = !!errors[name];
    return (
      <label className={invalid ? 'field-invalid' : ''}>
        {label}{required && ' *'}
        {element(invalid)}
        {invalid && <span className="field-error">{errors[name]}</span>}
      </label>
    );
  }

  return (
    <form className="recipe-form" onSubmit={handleSubmit} noValidate>
      <h2>{recipe ? 'Edit Recipe' : 'New Recipe'}</h2>
      {apiError && <p className="error">{apiError}</p>}

      {field('title', 'Title', (inv) => (
        <input value={form.title} onChange={set('title')} aria-invalid={inv} />
      ), true)}

      <label>Description
        <textarea rows={2} value={form.description} onChange={set('description')} />
      </label>

      <div className="row-3">
        <label>Category
          <select value={form.category} onChange={set('category')}>
            <option value="">— select —</option>
            {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
          </select>
        </label>

        {field('servings', 'Servings', (inv) => (
          <input type="text" inputMode="numeric" value={form.servings} onChange={set('servings')} aria-invalid={inv} />
        ))}

        {field('prep_time', 'Prep (min)', (inv) => (
          <input type="text" inputMode="numeric" value={form.prep_time} onChange={set('prep_time')} aria-invalid={inv} />
        ))}

        {field('cook_time', 'Cook (min)', (inv) => (
          <input type="text" inputMode="numeric" value={form.cook_time} onChange={set('cook_time')} aria-invalid={inv} />
        ))}
      </div>

      {field('ingredients', <span>Ingredients <span className="hint">(one per line)</span></span>, (inv) => (
        <textarea rows={6} value={form.ingredients} onChange={set('ingredients')} aria-invalid={inv} />
      ), true)}

      {field('instructions', <span>Instructions <span className="hint">(one step per line)</span></span>, (inv) => (
        <textarea rows={8} value={form.instructions} onChange={set('instructions')} aria-invalid={inv} />
      ), true)}

      <div className="form-actions">
        <button type="button" className="btn-secondary" onClick={onCancel}>Cancel</button>
        <button type="submit" className="btn-primary" disabled={saving}>
          {saving ? 'Saving…' : 'Save Recipe'}
        </button>
      </div>
    </form>
  );
}
