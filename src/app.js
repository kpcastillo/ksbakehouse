require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

// Allow React dev server (port 5173) in development
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (origin === 'http://localhost:5173') {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  }
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

app.use('/recipes', require('./routes/recipes'));
app.get('/', (_, res) => res.json({ message: 'KS Bakehouse Recipe API', version: '1.0.0' }));
app.use((req, res) => res.status(404).json({ error: 'Not found' }));

module.exports = app;
