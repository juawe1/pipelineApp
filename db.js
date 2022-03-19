
const mongoose = require('mongoose')
const url = require('./config.json')
const userSchema = require('./src/schemas/user-schema.js')
const taskSchema = require('./src/schemas/task-schema.js')

const connectionPramas = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}



var db = module.exports = {
    connect: () => {
        mongoose.connect(url.mongoLink,connectionPramas).then( () => {
            console.log('connected to database')
        }).catch( (err) =>{
              console.log(`Error connecting to the database. \n${err}`)
            })
    },
    disconnect: () => {
        mongoose.connection.close()
        console.log('connection terminated')
    },
    newUserData: (userData) =>{
        const user = {
            name: userData
        }
        new userSchema(user).save()
        console.log(`${userData} saved to mongoDB`)
    },
    newTask: (dateOf, titleOf) =>{
        const task = {
            date: dateOf,
            title: titleOf
        }
        new taskSchema(task).save()
        console.log(`${task} saved to mongoDB`)
    }
}