const { Model, DataTypes } = require('sequelize');

class Address extends Model {
    static init(conexao) {
        super.init({
            zipcode: DataTypes.STRING,
            street: DataTypes.STRING,
            number: DataTypes.INTEGER,
        }, {
            sequelize: conexao,
        })
    }

    static associate(models) {
        this.belongsTo(models.Students, { foreignKey: 'student_id', as: 'students' })
    }
}

module.exports = Address;