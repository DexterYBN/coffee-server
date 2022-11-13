const mongoose = require('mongoose')

const coffeeSchema = mongoose.Schema({
    name: String,
    price: Number,
    inStock: Boolean,
    conCoff: Boolean,
    volume: String,
    description: String
})

const Coffee = mongoose.model('Coffee', coffeeSchema)

module.exports = Coffee