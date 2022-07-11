'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('addresses', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            student_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'students',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
                allowNull: false
            },
            zipcode: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            street: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            number: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('addresses');
    }
};