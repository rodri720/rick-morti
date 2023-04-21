const express = require('express');
const PORT = 3001;
const router = express.Router();
const server = express();

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});

router.get('/', (req, res) => {
  // Manejar solicitudes a https://rickandmortyapi.com/api/character/
});

server.use('/api', router);
server.use(express.json());

server.listen(PORT, () => {
  console.log('Server running on port 3001');
});

module.exports = server;
