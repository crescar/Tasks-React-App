const jwt = require('jsonwebtoken');
const md5 = require('md5')
const secretKey = 'CafeChocolatePadanOsoGato2323..cocoa';
const conexion = require('../db')

const authController = {

}

authController.login = (req, res) => {
    const {Email, Pass} = req.body;
    const hashPass = md5(Pass)
    conexion.query('SELECT * FROM users WHERE Email = ?',[Email], async (error,results)=>{
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


module.exports = authController