// Import modules
const express = require('express');
const cors = require('cors');
// const { Pool } = require('pg');
require('dotenv').config();

// App
const app = express();

// DB
// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

// pool.connect((err) => {
//   if (err) {
//     console.error('Error connecting to PostgreSQL database:', err);
//   } else {
//     console.log('Connected to PostgreSQL database');
//   }
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Middleware
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.get('/getHello', (req, res) => {
  res.send('Hello from the server!');
});

// Route to get food data
// app.get('/getFood', async (req, res) => {
//   const query = `
//     SELECT *
//     FROM foods
//   `;

//   try {
//     const result = await pool.query(query);
//     if (result.rows.length === 0) {
//       return res.status(404).json({ message: 'No foods found' });
//     }
//     res.json(result.rows);
//     console.log("foods", result.rows);
//   } catch (error) {
//     console.error('Error fetching foods:', error);
//     res.status(500).json({ error: 'Failed to fetch foods' });
//   }
// });

module.exports = app;
