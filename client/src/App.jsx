import { useState, useEffect, useCallback } from 'react';
import { api } from './api';
import RecipeForm from './RecipeForm';
import RecipeDetail from './RecipeDetail';
import './App.css';

const CATEGORIES = ['breads', 'cakes', 'cookies', 'pastries', 'pies', 'other'];

export default function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [view, setView] = useState('list'); // 'list' | 'detail' | 'form'
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setLoading(true);
    const data = await api.list({ search, category });
    setRecipes(data);
    setLoading(false);
  }, [search, category]);

  useEffect(() => { load(); }, [load]);

  async function handleSave(body) {
    if (selected) {
      const updated = await api.update(selected.id, body);
      setSelected(updated);
      setView('detail');
    } else {
      await api.create(body);
      setView('list');
    }
    await load();
  }

  async function handleDelete(id) {
    if (!confirm('Delete this recipe?')) return;
    await api.remove(id);
    setSelected(null);
    setView('list');
    await load();
  }

  if (view === 'form') {
    return (
      <div className="container">
        <RecipeForm
          recipe={selected}
          onSave={handleSave}
          onCancel={() => setView(selected ? 'detail' : 'list')}
        />
      </div>
    );
  }

  if (view === 'detail' && selected) {
    return (
      <div className="container">
        <RecipeDetail
          recipe={selected}
          onBack={() => { setSelected(null); setView('list'); }}
          onEdit={() => setView('form')}
          onDelete={handleDelete}
        />
      </div>
    );
  }

  return (
    <div className="container">
      <header className="app-header">
        <h1>🧁 KS Bakehouse</h1>
        <button className="btn-primary" onClick={() => { setSelected(null); setView('form'); }}>
          + New Recipe
        </button>
      </header>

      <div className="filters">
        <input
          placeholder="Search recipes…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All categories</option>
          {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
        </select>
      </div>

      {loading ? (
        <p className="empty">Loading…</p>
      ) : recipes.length === 0 ? (
        <p className="empty">No recipes yet. Add your first one!</p>
      ) : (
        <div className="recipe-grid">
          {recipes.map((r) => (
            <div key={r.id} className="recipe-card" onClick={() => { setSelected(r); setView('detail'); }}>
              <div className="card-body">
                <h3>{r.title}</h3>
                {r.category && <span className="badge">{r.category}</span>}
                {r.description && <p>{r.description}</p>}
              </div>
              <div className="card-meta">
                {(r.prep_time || r.cook_time) && <span>⏱ {(r.prep_time ?? 0) + (r.cook_time ?? 0)} min</span>}
                {r.servings && <span>🍽 {r.servings} servings</span>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
