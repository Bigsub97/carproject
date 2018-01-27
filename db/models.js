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
const Car = db.define('cars', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    manufacturer:DataTypes.STRING,
    name:{
        type:DataTypes.STRING,
        unique:true
    },
    mainimg:DataTypes.STRING,
    ldate:DataTypes.STRING,
    e1:DataTypes.BLOB('long'),
    e2:DataTypes.BLOB('long'),
    description1:DataTypes.BLOB('long'),
    description2:DataTypes.BLOB('long'),
    description3:DataTypes.BLOB('long'),
    description4:DataTypes.BLOB('long'),
    manimg:DataTypes.STRING,
    topspeed:DataTypes.INTEGER,
    zerotohund:DataTypes.DOUBLE,
    power:DataTypes.DOUBLE,
    powtowt:DataTypes.DOUBLE,
    displacement:DataTypes.DOUBLE,
    weight:DataTypes.DOUBLE,
    price:DataTypes.INTEGER,
    scapacity:DataTypes.INTEGER,
    colorname1:DataTypes.STRING,
    colorname2:DataTypes.STRING,
    colorname3:DataTypes.STRING,
    colorname4:DataTypes.STRING,
    color1:DataTypes.STRING,
    color2:DataTypes.STRING,
    color3:DataTypes.STRING,
    color4:DataTypes.STRING,
    colorimg1:DataTypes.STRING,
    colorimg2:DataTypes.STRING,
    colorimg3:DataTypes.STRING,
    colorimg4:DataTypes.STRING,
    interior1:DataTypes.STRING,
    interior2:DataTypes.STRING,
    interior3:DataTypes.STRING,
    interior4:DataTypes.STRING,
    interior5:DataTypes.STRING,
    interior6:DataTypes.STRING,
    exteriors1:DataTypes.STRING,
    exteriors2:DataTypes.STRING,
    exteriors3:DataTypes.STRING,
    exteriorb1:DataTypes.STRING,
    exteriorb2:DataTypes.STRING,
    exteriorb3:DataTypes.STRING,
    exteriorf1:DataTypes.STRING,
    exteriorf2:DataTypes.STRING,
    exteriorf3:DataTypes.STRING,
    odh1:DataTypes.STRING,
    odd11:DataTypes.BLOB('long'),
    odd12:DataTypes.BLOB('long'),
    odd13:DataTypes.BLOB('long'),
    odd14:DataTypes.BLOB('long'),
    odh2:DataTypes.STRING,
    odd21:DataTypes.BLOB('long'),
    odd22:DataTypes.BLOB('long'),
    odd23:DataTypes.BLOB('long'),
    odd24:DataTypes.BLOB('long'),
    odh3:DataTypes.STRING,
    odd31:DataTypes.BLOB('long'),
    odd32:DataTypes.BLOB('long'),
    odd33:DataTypes.BLOB('long'),
    odd34:DataTypes.BLOB('long'),
    odh4:DataTypes.STRING,
    odd41:DataTypes.BLOB('long'),
    odd42:DataTypes.BLOB('long'),
    odd43:DataTypes.BLOB('long'),
    odd44:DataTypes.BLOB('long')
})

db.sync().then(() => "Database created")

exports = module.exports = {
    db,
    User,
    Car
}