const Coffee = require('../models/Coffee.model')
module.exports.coffeeController = {

    addCoffee: (req, res) => {
        Coffee.create({
            name: req.params.name,
            price: req.params.price,
            inStock: req.params.inStock,
            conCoff: req.params.conCoff,
            volume: req.params.volume,
            description: req.params.description
        })
            .then((data) => {
                res.json(data)
            })
            .catch({ 'error': 'не удалось добавить напиток' })
    },

    updateCoffee: (req, res) => {
        Coffee.findByIdAndUpdate(req.params.id, {
            name: req.params.name,
            price: req.params.price,
            inStock: req.params.inStock,
            conCoff: req.params.conCoff,
            volume: req.params.volume,
            description: req.params.description
        },
            { new: true })
            .then((data) => {
                res.json(data)
            })
            .catch({ 'error': 'ошибка при изменении напитка' })
    },

    removeCoffee: (req, res) => {
        Coffee.findByIdAndDelete(req.params.id)
            .then((data) => {
                res.json(data)
            })
            .catch({ 'error': 'ошибка при удалении напитка' })
    },

    getCoffeeById: (req, res) => {
        Coffee.findById(req.params.Coffeeid)
            .then((data) => {
                res.json(data)
            })
            .catch({ 'error': 'ID напитка не найден' })
    },

    getCoffee: (req, res) => {
        Coffee.find({}, { price: 1, name: 1, _id: 1 })
            .then((data) => {
                res.json(data)
            })
            .catch({ 'error': 'напиток не найден' })
    },

    getCoffeeStock: (req, res) => {
        Coffee.find({ inStock: true }, { price: 1, name: 1, _id: 1, inStock: 1 })
            .then((data) => {
                res.json(data)
            })
            .catch({ 'error': 'ошибка при отображении напитка' })
    }
}