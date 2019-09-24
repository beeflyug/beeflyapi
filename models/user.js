const Sequelize = require('sequelize')
const sequelize = require('../database/db')
const bcrypt = require('bcrypt')
class User extends Sequelize.Model {}

User.init({
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            min: 6,
            max: 32
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            min: 6,
            max: 546
        }
    }
}, {
    modelName: 'User',
    sequelize,
    hooks: {
        beforeCreate: (user) => {
            user.password = bcrypt.hashSync(user.password, 10)
        }
    }
})

module.exports = User
