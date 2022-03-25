const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    user: String,
    date: String,
    title: String,
    client: Boolean,
    category: String,
    notes: String
})

module.exports = mongoose.model('task', taskSchema)
