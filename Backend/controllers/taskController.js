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

Tasks.saveTasks = async (req, res) =>{
    const {token, Title, Description, UrlImg} = req.body
    const auth = await verifyToken(token)
    if (auth.acceso) {
        conexion.query('INSERT INTO taks(IDUser, Title, Description, ImgURL) VALUES (?,?,?,?)', [auth.userID, Title, Description, UrlImg],
        (error)=>{
            if (error) {
                return res.json({estado: '505'})
            }else{
                return res.json({acceso: true})
            }
        })
    }else{
        return res.json(auth)
    }
}

Tasks.deleteTaks = async (req,res) =>{
    const {token, IDTask} = req.body
    const auth = await verifyToken(token)
    if (auth.acceso) {
        conexion.query('DELETE FROM Taks WHERE IDTasks = ? && IDUser = ?',[IDTask, auth.userID],
        (error)=>{
            if (error) {
                return res.json({estado: '505'})
            }else{
                return res.json({acceso: true})
            }
        })
    }else{
        return res.json(auth)
    }
}

Tasks.getTask = async (req, res) =>{
    const {token, IDTask} = req.body
    const auth = await verifyToken(token)
    if (auth.acceso) {
        conexion.query('SELECT * FROM Taks WHERE IDTasks = ? && IDUser = ?',[IDTask, auth.userID],
        (error, results)=>{
            if (error) {
                return res.json({estado: '505'})
            }else{
                if(results.length !== 0){
                    return res.json({acceso: true, results: results})
                }else{
                    return res.json({acceso: false, mensaje: 'Archivo no encomtrado'})
                } 
            }
        })
    }else{
        return res.json(auth)
    }
}

Tasks.updateTask = async (req, res) =>{
    const {token, Title, Description, UrlImg, IDTask} = req.body
    const auth = await verifyToken(token)
    if (auth.acceso) {
        conexion.query('UPDATE taks SET Title = ?, Description = ?, ImgURL = ? WHERE IDTasks = ? AND IDUser = ?',
        [Title, Description, UrlImg, IDTask, auth.userID], (error)=>{
            if (error) {
                console.log(error)
                return res.json({estado: '505'})
            }else{
                return res.json({acceso: true})
            }
        })
    }else{
        return res.json(auth)
    }
}

module.exports = Tasks