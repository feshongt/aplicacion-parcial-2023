import {Sequelize} from 'sequelize'

const db = new Sequelize('database_app', 'root', '123Jose$',{
    host:'localhost',
    dialect: 'mysql'
})

export default db