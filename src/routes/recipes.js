const express = require('express');
const { pool } = require('../db');

const router = express.Router();

// GET /recipes — optional ?category=&search=
router.get('/', async (req, res) => {
  const { category, search } = req.query;
  const conditions = [];
  const params = [];

  if (category) {
    params.push(category);
    conditions.push(`category = $${params.length}`);
  }
  if (search) {
    params.push(`%${search}%`);
    conditions.push(`(title ILIKE $${params.length} OR description ILIKE $${params.length})`);
  }

  const where = conditions.length ? `WHERE ${conditions.join(' AND ')}` : '';
  const { rows } = await pool.query(
    `SELECT * FROM recipes ${where} ORDER BY created_at DESC`,
    params
  );
  res.json(rows);
});

// GET /recipes/:id
router.get('/:id', async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM recipes WHERE id = $1', [req.params.id]);
  if (!rows.length) return res.status(404).json({ error: 'Recipe not found' });
  res.json(rows[0]);
});

// POST /recipes
router.post('/', async (req, res) => {
  const { title, description, category, servings, prep_time, cook_time, ingredients, instructions } = req.body;
  if (!title || !ingredients || !instructions) {
    return res.status(400).json({ error: 'title, ingredients, and instructions are required' });
  }

  const { rows } = await pool.query(
    `INSERT INTO recipes (title, description, category, servings, prep_time, cook_time, ingredients, instructions)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
     RETURNING *`,
    [title, description ?? null, category ?? null, servings ?? null,
     prep_time ?? null, cook_time ?? null, JSON.stringify(ingredients), JSON.stringify(instructions)]
  );
  res.status(201).json(rows[0]);
});

// PATCH /recipes/:id
router.patch('/:id', async (req, res) => {
  const fields = ['title', 'description', 'category', 'servings', 'prep_time', 'cook_time', 'ingredients', 'instructions'];
  const jsonFields = new Set(['ingredients', 'instructions']);
  const setClauses = [];
  const params = [];

  for (const field of fields) {
    if (req.body[field] !== undefined) {
      params.push(jsonFields.has(field) ? JSON.stringify(req.body[field]) : req.body[field]);
      setClauses.push(`${field} = $${params.length}`);
    }
  }

  if (!setClauses.length) return res.status(400).json({ error: 'No valid fields to update' });

  params.push(req.params.id);
  setClauses.push('updated_at = NOW()');

  const { rows } = await pool.query(
    `UPDATE recipes SET ${setClauses.join(', ')} WHERE id = $${params.length} RETURNING *`,
    params
  );
  if (!rows.length) return res.status(404).json({ error: 'Recipe not found' });
  res.json(rows[0]);
});

// DELETE /recipes/:id
router.delete('/:id', async (req, res) => {
  const { rowCount } = await pool.query('DELETE FROM recipes WHERE id = $1', [req.params.id]);
  if (!rowCount) return res.status(404).json({ error: 'Recipe not found' });
  res.status(204).end();
});

module.exports = router;
