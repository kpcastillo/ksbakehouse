const express = require('express');
const db = require('../db');

const router = express.Router();

// GET /recipes — optional ?category=&search=
router.get('/', (req, res) => {
  const { category, search } = req.query;
  let query = 'SELECT * FROM recipes';
  const params = [];
  const conditions = [];

  if (category) {
    conditions.push('category = ?');
    params.push(category);
  }
  if (search) {
    conditions.push('(title LIKE ? OR description LIKE ?)');
    params.push(`%${search}%`, `%${search}%`);
  }
  if (conditions.length) query += ' WHERE ' + conditions.join(' AND ');
  query += ' ORDER BY created_at DESC';

  const recipes = db.prepare(query).all(...params);
  res.json(recipes.map(parseRecipe));
});

// GET /recipes/:id
router.get('/:id', (req, res) => {
  const recipe = db.prepare('SELECT * FROM recipes WHERE id = ?').get(req.params.id);
  if (!recipe) return res.status(404).json({ error: 'Recipe not found' });
  res.json(parseRecipe(recipe));
});

// POST /recipes
router.post('/', (req, res) => {
  const { title, description, category, servings, prep_time, cook_time, ingredients, instructions } = req.body;
  if (!title || !ingredients || !instructions) {
    return res.status(400).json({ error: 'title, ingredients, and instructions are required' });
  }

  const result = db.prepare(`
    INSERT INTO recipes (title, description, category, servings, prep_time, cook_time, ingredients, instructions)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `).run(title, description ?? null, category ?? null, servings ?? null,
    prep_time ?? null, cook_time ?? null,
    JSON.stringify(ingredients), JSON.stringify(instructions));

  const recipe = db.prepare('SELECT * FROM recipes WHERE id = ?').get(result.lastInsertRowid);
  res.status(201).json(parseRecipe(recipe));
});

// PATCH /recipes/:id
router.patch('/:id', (req, res) => {
  const existing = db.prepare('SELECT * FROM recipes WHERE id = ?').get(req.params.id);
  if (!existing) return res.status(404).json({ error: 'Recipe not found' });

  const fields = ['title', 'description', 'category', 'servings', 'prep_time', 'cook_time', 'ingredients', 'instructions'];
  const jsonFields = new Set(['ingredients', 'instructions']);
  const updates = [];
  const params = [];

  for (const field of fields) {
    if (req.body[field] !== undefined) {
      updates.push(`${field} = ?`);
      params.push(jsonFields.has(field) ? JSON.stringify(req.body[field]) : req.body[field]);
    }
  }

  if (!updates.length) return res.status(400).json({ error: 'No valid fields to update' });

  updates.push("updated_at = datetime('now')");
  params.push(req.params.id);

  db.prepare(`UPDATE recipes SET ${updates.join(', ')} WHERE id = ?`).run(...params);
  const recipe = db.prepare('SELECT * FROM recipes WHERE id = ?').get(req.params.id);
  res.json(parseRecipe(recipe));
});

// DELETE /recipes/:id
router.delete('/:id', (req, res) => {
  const result = db.prepare('DELETE FROM recipes WHERE id = ?').run(req.params.id);
  if (result.changes === 0) return res.status(404).json({ error: 'Recipe not found' });
  res.status(204).end();
});

function parseRecipe(r) {
  return { ...r, ingredients: JSON.parse(r.ingredients), instructions: JSON.parse(r.instructions) };
}

module.exports = router;
