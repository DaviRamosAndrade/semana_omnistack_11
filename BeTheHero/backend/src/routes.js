const express = require('express');
const routes = express.Router();
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

/**
 * Routes Login
 */

routes.post('/sessions', SessionController.create);

/**
 * Routes OngController
 */

routes.get('/ongs', OngController.index);
routes.post('/ongs',OngController.create);


/**
 * Routes IncidentsCOntroller
 */

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);


/***
 * Routes ProfileController
 */

routes.get('/profile', ProfileController.index);

 module.exports = routes;