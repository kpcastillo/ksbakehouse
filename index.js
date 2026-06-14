require('dotenv').config();
const app = require('./src/app');
const { init } = require('./src/db');

const PORT = process.env.PORT || 3000;

init()
  .then(() => app.listen(PORT, () => console.log(`KS Bakehouse API running on http://localhost:${PORT}`)))
  .catch(err => { console.error('Failed to connect to database:', err.message); process.exit(1); });
