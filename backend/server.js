// server.js
const http = require('http');
const app = require('./app');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 8080;

// Create the HTTP server
const server = http.createServer(app);

// Start listening
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
