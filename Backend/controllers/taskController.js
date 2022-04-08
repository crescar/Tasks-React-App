const verifyToken = require('../middleware/verifyToken')
const conexion = require('../db')
const Tasks = {

}

Tasks.getTasks = async (req, res) =>{
    
    const {token} = req.body
    const auth = await verifyToken(token)
    if (auth.acceso) {
        conexion.query('SELECT * FROM taks WHERE IDUser = ?', [auth.userID], (error, results)=>{
            if(error){
                res.json({mensaje: 'Ocurrio un error', statu: '505'})
            }else{
                if(results.length !== 0){
                    return res.json({have:true,results:results})
                }else{
                    return res.json({have:false, mensaje:'No posees tareas pendientes'})
                }
            }
        })
    }else{
       return res.json(auth)
    }

}

module.exports = Tasks