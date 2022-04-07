const jwt = require('jsonwebtoken');
const md5 = require('md5')
const secretKey = 'CafeChocolatePadanOsoGato2323..cocoa';
const conexion = require('../db')
const control = {

}

control.verifyDatosRegistro = (req, res, next) =>{
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

control.register = (req, res) =>{
    const {Name, Email, Pass} = req.body
    const hashEmail = md5(Email)
    const hashPass = md5(Pass)
    conexion.query('INSERT INTO users(Name, Email, Pass) VALUES (?,?,?)', [Name, hashEmail, hashPass],
    (error)=>{
        if (error) {
            return res.json({estado: '505'})
        }else{
            return res.json({acceso: true})
        }
    })
}

control.validateToken = async (req, res, next) =>{
    const {token} = req.body
    const checktoken = await jwt.verify(token, secretKey)
    if(checktoken){
        console.log(checktoken)
        res.json({accseo:'autorizado'})
    }else{
        res.json({acceso:false, mensaje:'no estas autorizado'})
    }
}

control.login = (req, res) => {
    const {Email, Pass} = req.body;
    const hashEmail = md5(Email)
    const hashPass = md5(Pass)
    conexion.query('SELECT * FROM users WHERE Email = ?',[hashEmail], async (error,results)=>{
        if (error) {
            return res.json({estado: '505'})
        }else{
            if(results.length !== 0){
                if (results[0].Pass == hashPass) {
                    let ID = results[0].ID
                    const token = await jwt.sign({ID}, secretKey, (err, token)=>{
                        if(err){
                            return res.json({estado: '505'})
                        }else{
                            return res.json({token, acceso:true})
                        }
                    })
                }else{
                   return res.json({acceso: false, mensaje:'correo y/o clave invalidos'})
                }
            }else{
                return res.json({acceso: false, mensaje:'correo y/o clave invalidos'})
            }
            
        }
    })
    

}

module.exports = control