const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

// รอ Postgresql
try {
    
    const sequelize = new Sequelize(process.env.PGDATABASE, process.env.PGUSER, process.env.PGPASSWORD, {
        // gimme postgres, please!
        dialect: 'postgres',
        host: process.env.PGHOST,
        pool: {
          max: process.env.PGPOOLMAX,
          min: process.env.PGPOOLMIN,
          acquire: process.env.PGPOOLACQURIE,
          idle: process.env.PGPOOLIDLE
        }, define: {
          underscored: true,
          freezeTableName: true, //use singular table name
          timestamps: false,  // I do not want timestamp fields by default
        },
        dialectOptions: {
          useUTC: false, //for reading from database
          dateStrings: true,
          typeCast: function (field, next) { // for reading from database
            if (field.type === 'DATETIME') {
              return field.string()
            }
              return next()
            },
        },
        timezone: '+07:00'
      })
      console.log('connected DB')
      module.exports = sequelize
} catch (e) {
  console.log('Error Connection: ' + e)
}

