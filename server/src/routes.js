const express = require('express');

const genreController = require('./controllers/genreController');
const userController = require('./controllers/userController');
const userGenreController = require('./controllers/userGenreController');

const routes = express.Router();

//============= GENRE ===============
routes.get('/genre', genreController.index);
routes.post('/genre', genreController.create);

routes.get('/user', userController.index);
routes.post('/user', userController.create);

routes.get('/user_genre', userGenreController.index);
routes.post('/user_genre', userGenreController.create);

module.exports = routes;