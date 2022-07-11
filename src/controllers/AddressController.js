const Students = require('../models/Students');
const Address = require('../models/Address');

module.exports = {
    async index(req, res) {
        const { student_id } = req.params;

        const student = await Students.findByPk(student_id, {
            include: { association: 'addresses' }
        });

        return res.json(student);
    },

    async store(req, res) {
        const { student_id } = req.params;
        const { zipcode, street, number } = req.body;

        const student = await Students.findByPk(student_id);

        if (!student) {
            return res.status(400).json({ error: 'Aluno Não Em comtrado' });
        }

        const address = await Address.create({
            zipcode,
            street,
            number,
            student_id
        });

        return res.json(address);
    }
}