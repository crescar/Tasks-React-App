const md5 = require('md5')
const conexion = require('../db')

const registerController = {

}

registerController.verifyData = (req, res, next) =>{
    const {Name,Email,Pass} = req.body
    if (Name == "" || Email == "" || Pass == "") {
        return res.send('Faltan llenar Campos')
    }else{
        let hashEmail = md5(Email)
        conexion.query('SELECT * FROM users WHERE Email = ?',[hashEmail],(error, results)=>{
            if (error) {
                return res.json({estado: '505'})
            }else{
                if (results.length == 0) {
                    return next()
                }else{
                    return res.json({acceso: false, mensaje:'correo en uso'})
                }
            }
        })
    }
    
}

registerController.Register = (req, res) =>{
    const {Name, Email, Pass} = req.body
    const hashPass = md5(Pass)
    conexion.query('INSERT INTO users(Name, Email, Pass) VALUES (?,?,?)', [Name, Email, hashPass],
    (error)=>{
        if (error) {
            return res.json({estado: '505'})
        }else{
            return res.json({acceso: true})
        }
    })
}


module.exports = registerController