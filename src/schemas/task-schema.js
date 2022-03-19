const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    date: String,
    title: String
})

module.exports = mongoose.model('task', taskSchema)
