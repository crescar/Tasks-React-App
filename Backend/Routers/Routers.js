const { Router } = require('express')
const router = Router()

// -------Controllers-------------------

const authController = require('../controllers/authController')
const registerController = require('../controllers/registerController')
const taksController = require('../controllers/taskController')


//----------register and login -------------------

router.post('/login', authController.login)
router.post('/register', registerController.verifyData ,registerController.Register)

//--------- Tasks---------------------------------

router.post('/getTasks', taksController.getTasks )
router.post('/createTaks', taksController.saveTasks )
router.delete('/deleteTask', taksController.deleteTaks )
router.post('/getTask', taksController.getTask)
router.put('/updateTaks', taksController.updateTask)





module.exports = router