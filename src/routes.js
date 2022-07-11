const express = require('express');
const StudentsController = require('./controllers/StudentsController');
const AddressController = require('./controllers/AddressController')

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json('Salve');
})

routes.post('/students', StudentsController.store);
routes.get('/students', StudentsController.index);

routes.get('/students/:student_id/addresses', AddressController.index);
routes.post('/students/:student_id/addresses', AddressController.store);

module.exports = routes;