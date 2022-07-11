const Students = require('../models/Students')

module.exports = {
    async index(req, res) {
        const students = await Students.findAll();
        return res.json(students);
    },

    async store(req, res) {
        const { nome_student, email_student } = req.body;

        const students = nome_student && email_student? await Students.create({ nome_student, email_student }):'erro';

        return res.json(students);
    }
}