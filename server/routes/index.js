const express = require('express');
const router = express.router();
const getCharById = require('./controllers/index');
const { CharacterControlles } = require('./controllers/index');
const { loginControlles } = require('./controllers/index');
const { handleFavoritesControlles } = require('./controllers/index');
const { deleteFav } = require('./controllers/index');
const app = express();
const URL = 'https://rickandmortyapi.com/api/character/';

const { 
    login, 
    postFav, 
    deleteFav,
     deleteFav, } = require('./controllers/index');



router.get('/character/:id',CharacterControlles.getCharById);
router.get('/login',loginControlles.login);
router.post('/fav',handleFavoritesControlles.postFav);
router.delete('/fav/:id',handleFavoritesControlles.deleteFav);




module.exports = { 
    router,
    login, 
    postFav, 
    deleteFav,
     deleteFav, };
