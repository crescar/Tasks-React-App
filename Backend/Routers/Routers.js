const {Router} = require('express')
const router = Router()
const control = require('../controllers/controllers')

router.post('/login', control.login)
router.post('/register', control.verifyDatosRegistro ,control.register)

module.exports = router