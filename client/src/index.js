const express = require('express');

//const App = require('./App.js');
//const URL = 'https://rickandmortyapi.com/api/character/';
const PORT = 3001;
const router = require ('./router/index.js');
const server = express ();

server.use((req,res,next)=> {
  res.header
  ('Access-Control-Allow-Origin', '*');
  res.header
  ('Access-Control-Allow-Credentials', true);
  res.header
  ('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header
  ('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json')
  next();

  
});
server.use (express.json ());
server.use ('/rickandmorty', router);
server.listen (PORT, () => {
  console.log ('Server running on port 3001');
});

module.exports = router;