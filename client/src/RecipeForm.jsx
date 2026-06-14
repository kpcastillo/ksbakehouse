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

export default function RecipeForm({ recipe, onSave, onCancel }) {
  const [form, setForm] = useState(recipe ? toForm(recipe) : emptyForm);
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);

  function set(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setSaving(true);
    try {
      await onSave({
        title: form.title,
        description: form.description || undefined,
        category: form.category || undefined,
        servings: form.servings ? Number(form.servings) : undefined,
        prep_time: form.prep_time ? Number(form.prep_time) : undefined,
        cook_time: form.cook_time ? Number(form.cook_time) : undefined,
        ingredients: form.ingredients.split('\n').map((s) => s.trim()).filter(Boolean),
        instructions: form.instructions.split('\n').map((s) => s.trim()).filter(Boolean),
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  return (
    <form className="recipe-form" onSubmit={handleSubmit}>
      <h2>{recipe ? 'Edit Recipe' : 'New Recipe'}</h2>
      {error && <p className="error">{error}</p>}

      <label>Title *
        <input required value={form.title} onChange={set('title')} />
      </label>

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
        <label>Servings
          <input type="number" min={1} value={form.servings} onChange={set('servings')} />
        </label>
        <label>Prep (min)
          <input type="number" min={0} value={form.prep_time} onChange={set('prep_time')} />
        </label>
        <label>Cook (min)
          <input type="number" min={0} value={form.cook_time} onChange={set('cook_time')} />
        </label>
      </div>

      <label>Ingredients * <span className="hint">(one per line)</span>
        <textarea required rows={6} value={form.ingredients} onChange={set('ingredients')} />
      </label>

      <label>Instructions * <span className="hint">(one step per line)</span>
        <textarea required rows={8} value={form.instructions} onChange={set('instructions')} />
      </label>

      <div className="form-actions">
        <button type="button" className="btn-secondary" onClick={onCancel}>Cancel</button>
        <button type="submit" className="btn-primary" disabled={saving}>
          {saving ? 'Saving…' : 'Save Recipe'}
        </button>
      </div>
    </form>
  );
}
