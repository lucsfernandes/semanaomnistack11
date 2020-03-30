const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/**
* Rota / Recurso

* Métodos HTTP:
* 
* GET: Buscar/listar uma informação do Back-end
* POST: Criar uma informação no Back-end
* PUT: Alterar uma informação no Back-end
* DELETE: Deletar uma informação no Back-end

* Tipos de parâmetros:
* 
* Query Params: Parâmetros nomeados enviados na rota após o símbolo "?" (Filtros, paginação) (request.query)
* Route Params: Parâmetros utilizados para identificar recursos (request.params)
* Raquest Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;