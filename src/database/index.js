const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Students = require('../models/Students');
const Address = require('../models/Address');

const conexao = new Sequelize(dbConfig);

conexao.authenticate().then(function() {
    console.log('Database Connection Successful - ✅')
}).catch(function() {
    console.log('ERROR: Failed to Connect to Database - ❌')
});

Students.init(conexao);
Address.init(conexao);

Students.associate(conexao.models);
Address.associate(conexao.models);

module.exports = conexao;