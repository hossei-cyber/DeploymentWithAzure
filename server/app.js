// Import modules
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

// App
const app = express();

// DB
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false 
  }
});

pool.connect((err) => {
  if (err) {
    console.error('Error connecting to PostgreSQL database:', err);
  } else {
    console.log('Connected to PostgreSQL database');
  }
});

//POrt
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Middleware
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());


// Routes
app.get('/getHello', (req, res) => {
  res.send('Hello from the server 2!');
});
app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

app.get('/getFood', async (req, res) => {
  const query = `SELECT * FROM foods`;

  try {
    const result = await pool.query(query);
    if (result.rows.length === 0) {
      return res.json([]);
    }
    res.json(result.rows);
    console.log("foods", result.rows);
  } catch (error) {
    console.error('Error fetching foods:', error);
    res.status(500).json({ error: 'Failed to fetch foods' });
  }
});


module.exports = app;
