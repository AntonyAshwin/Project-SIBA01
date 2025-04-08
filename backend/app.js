// app.js
const express = require('express');
const cors = require('cors');
const uploadRoutes = require('./routes/upload.route'); // adjust path if needed

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/upload', uploadRoutes);

// Health check
app.get('/', (req, res) => {
  res.send('✅ Backend is up and running!');
});

module.exports = app;
