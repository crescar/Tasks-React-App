const mysql = require('mysql')

const conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"tasks-react-app"
})

conexion.connect((error)=>{
    if(error){
        console.log(`A ocurrido el siguiente erro ${error}`)
    }else{
        console.log('base de datos conectada')
    }
})

module.exports = conexion