const Database = require('better-sqlite3');
const path = require('path');

const db = new Database(path.join(__dirname, '..', 'recipes.db'));

db.exec(`
  CREATE TABLE IF NOT EXISTS recipes (
    id           INTEGER PRIMARY KEY AUTOINCREMENT,
    title        TEXT    NOT NULL,
    description  TEXT,
    category     TEXT,
    servings     INTEGER,
    prep_time    INTEGER,
    cook_time    INTEGER,
    ingredients  TEXT    NOT NULL,
    instructions TEXT    NOT NULL,
    created_at   TEXT    DEFAULT (datetime('now')),
    updated_at   TEXT    DEFAULT (datetime('now'))
  );
`);

module.exports = db;
