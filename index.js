const experss = require('express')
const mongoose = require('mongoose')

const app = experss()

app.use(experss.json())
app.use(require('./routes'))

mongoose.connect('mongodb+srv://into:code@cluster0.g65pwgp.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log('соединение с сервером установлено')
    })
app.listen(3000, () => {
    console.log('сервер запущен по адресу http://localhost:3000')
})