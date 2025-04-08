// routes/upload.route.js
const express = require('express');
const router = express.Router();

// Temporary test endpoint
router.post('/', (req, res) => {
  res.json({ message: 'Upload route works!' });
});

module.exports = router;