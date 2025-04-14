const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();         // Load .env
connectDB();             // Connect DB

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
