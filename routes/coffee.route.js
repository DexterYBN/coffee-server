const { Router } = require('express')
const { coffeeController } = require('../controllers/coffee.controller')
const router = Router()

router.get('/', coffeeController.getCoffee)
router.get('/:id', coffeeController.getCoffeeById)
router.get('/in-stock', coffeeController.getCoffeeStock)
router.post('/', coffeeController.addCoffee)
router.patch('/:id', coffeeController.updateCoffee)
router.delete('/:id', coffeeController.removeCoffee)

module.exports = router