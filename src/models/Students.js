const { Model, DataTypes } = require('sequelize');


class Students extends Model {
    static init(conexao) {
        super.init({
            nome_student: DataTypes.STRING,
            email_student: DataTypes.STRING,
        }, {
            sequelize: conexao
        })
    }

    static associate(models) {
        this.hasMany(models.Address, { foreignKey: 'student_id', as: 'addresses' })
    }
}

module.exports = Students;