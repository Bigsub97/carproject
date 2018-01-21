const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes

const db = new Sequelize('cars24', 'newuser', 'newpass', {
    dialect: 'mysql'
})

const User = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: DataTypes.STRING
    ,fname:DataTypes.STRING,
    lname:DataTypes.STRING,
    dob:DataTypes.DATEONLY,
    country:DataTypes.STRING,
    address:DataTypes.STRING,
    email:DataTypes.STRING,
    mobno:DataTypes.STRING,
    

})

db.sync().then(() => "Database created")

exports = module.exports = {
    db,
    User
}