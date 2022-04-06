const jwt = require('jsonwebtoken');
const secretKey = 'CafeChocolatePadanOsoGato2323..cocoa';
const conexion = require('../db')
const control = {

}

control.verifyDatosRegistro = (req, res, next) =>{
    const {Name,Email,Pass} = req.body
    if (Name == "" || Email == "" || Pass == "") {
        return res.send('Faltan llenar Campos')
    }else{
        conexion.query('SELECT * FROM users WHERE Email = ?',[Email],(error, results)=>{
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
    conexion.query('INSERT INTO users(Name, Email, Pass) VALUES (?,?,?)', [Name, Email, Pass],
    (error)=>{
        if (error) {
            return res.json({estado: '505'})
        }else{
            return res.json({acceso: true})
        }
    })
}


control.login = (req, res) => {
    const {Email, Pass} = req.body;
    
    conexion.query('SELECT * FROM users WHERE Email = ? && Pass',[Email], async (error,results)=>{
        if (error) {
            return res.json({estado: '505'})
        }else{
            if (results[0].Pass == Pass) {
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
        }
    })
    

}

module.exports = control