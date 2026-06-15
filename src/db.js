require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

async function init() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS recipes (
      id           SERIAL PRIMARY KEY,
      title        TEXT    NOT NULL,
      description  TEXT,
      category     TEXT,
      servings     INTEGER,
      prep_time    INTEGER,
      cook_time    INTEGER,
      ingredients  JSONB   NOT NULL,
      instructions JSONB   NOT NULL,
      created_at   TIMESTAMPTZ DEFAULT NOW(),
      updated_at   TIMESTAMPTZ DEFAULT NOW()
    );
  `);
}

module.exports = { pool, init };
