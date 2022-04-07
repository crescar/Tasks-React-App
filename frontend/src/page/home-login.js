import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/navbar';
import LogiForm from '../components/login';


const HomeLogin = ()=>{

    const [Email, setEmail] = useState('')
    const [Pass, setPass] = useState('')
    const [token, setToken] = useState(localStorage.getItem('token'))
    const navigate = useNavigate()

    useEffect(()=>{
        if (token) {
            navigate('/dashboard')
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
                navigate('/dashboard')

            }else{
                alert(results.mensaje)
            }
        }
    }


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

export default HomeLogin