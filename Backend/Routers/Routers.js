const {Router} = require('express')
const router = Router()
const control = require('../controllers/controllers')

router.post('/login', control.login)
router.post('/register', control.verifyDatosRegistro ,control.register)
router.get('/getTasks',control.validateToken)

module.exports = router