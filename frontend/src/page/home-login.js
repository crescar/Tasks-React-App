import React, {useState, useEffect} from 'react';
import NavBar from '../components/navbar';
import LogiForm from '../components/login';


const HomeLogin = ()=>{

    const [Email, setEmail] = useState('')
    const [Pass, setPass] = useState('')
    const [token, setToken] = useState(false)
    
   useEffect(()=>{

        let token = localStorage.getItem('token')
        if(token){
            console.log(true)
            setToken(true)
        }else{
            console.log(false)
            setToken(false)
        }

   })

    const handleDatos = (e)=>{
        if (e.target.name === "Email") {
            setEmail(e.target.value)
        }else{
            setPass(e.target.value)
        }
    }

    const handleLogin = async ()=>{
        if(Email === "" || Pass === ""){
            alert('alguno de los campos estan vacios')
        }else{
            let Datos = {Email:Email, Pass:Pass}
            let URL = 'http://localhost:3100/login'
            let options ={method: 'POST',headers: {'Content-Type': 'application/json;charset=utf-8'} ,body: JSON.stringify(Datos)}
            let responts = await fetch(URL,options)
            const results = await responts.json()
            if (results.acceso) {
                localStorage.setItem('token', results.token)
            }else{
                alert(results.mensaje)
            }
        }
    }

    const handleLogout = ()=>{
        localStorage.removeItem('token')
    }


    if(token){
        return(
            <>
            <div className='container'>
                <NavBar/>
                <a onClick={handleLogout}>Logout</a>
            </div>
        </>
        )
    }else{
        return(
            <>
                <div className='container'>
                    <NavBar/>
                    <LogiForm
                    handleDatos={handleDatos}
                    handleLogin = {handleLogin}
                    Email = {Email}
                    Pass = {Pass}
                    />
                </div>
            </>
        )
    }
}

export default HomeLogin