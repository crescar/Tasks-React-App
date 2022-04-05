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
                console.log(`ocurrio el siguiente error ${error}`)
                return res.sendStatus(400)
            }else{
                if (results.length == 0) {
                    return next()
                }else{
                    return res.send('correo en uso')
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
            console.log(`Ocurrio el siguiente Error ${error}`)
        }else{
            console.log('registro exitoso')
            res.sendStatus(200)
        }
    })
}


control.login = (req, res) => {
    const {User, Pass} = req.body;
    if (User == "" || Pass =="") {
        res.send('Faltan rellenar campos')
    }else{
        conexion.query('SELECT * FROM users WHERE Email = ?',[User], async (error,results)=>{
            if (error) {
                console.log(`Ocurrrio el siguiente error ${error}`)
            }else{
                if (results[0].Pass === Pass) {
                    let ID = results[0].ID
                    const token = await jwt.sign({ID}, secretKey, (err, token)=>{
                        if(err){
                            console.log(err)
                        }else{
                            res.json({token})
                        }
                    })
                }else{
                    res.send('Usuario y/o clave incorrectas')
                }
            }
        })
    }
    

}

module.exports = control