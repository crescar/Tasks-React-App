const { Router } = require('express')
const router = Router()
const authController = require('../controllers/controllers')

router.post('/login', authController.login)
router.post('/register', authController.verifyDatosRegistro ,authController.register)
router.get('/getTasks', authController.validateToken)

module.exports = router