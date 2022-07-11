const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Students = require('../models/Students');
const Address = require('../models/Address');

const conexao = new Sequelize(dbConfig);

conexao.authenticate().then(function() {
    console.log('Conexão Com o Banco de Dados Realizado Com Sucesso - ✅')
}).catch(function() {
    console.log('ERRO: Falha ao Se Conectar no Banco de Dados - ❌')
});

Students.init(conexao);
Address.init(conexao);

Students.associate(conexao.models);
Address.associate(conexao.models);

module.exports = conexao;