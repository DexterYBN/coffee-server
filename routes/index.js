const { Router } = require('express')
const router = Router()

router.use('/coffee', require('./coffee.route'))

module.exports = router