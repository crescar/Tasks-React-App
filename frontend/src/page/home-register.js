import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/navbar';
import Registerfom from '../components/register';

const HomeRegi = ()=>{

    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Pass, setPass] = useState("")
    const [RPass, setRPass] = useState("")

    const handleDatos = (e)=>{
        if (e.target.name === "Name") {
            setName(e.target.value)
        }
        if (e.target.name === "Email") {
            setEmail(e.target.value)
        }
        if (e.target.name === "Pass") {
            setPass(e.target.value)
        }
        if (e.target.name === "RPass") {
            setRPass(e.target.value)
        }
    }

    const navigate = useNavigate()

    const handleRegister = async ()=>{
        if (Pass === RPass) {
            let Datos = {Email:Email,Name: Name, Pass:Pass}
            let URL = "http://localhost:3100/register"
            let options ={method: "POST",headers: {'Content-Type': 'application/json;charset=utf-8'} ,body: JSON.stringify(Datos)}
            let responts = await fetch(URL,options)
            const results = await responts.json()
            if (results.acceso) {
                navigate('/Rcomplet')
            }else{
                alert(results.mensaje)
            }
        }else{
            alert('Las claves no coinciden')
        }
    }

    return(
        <>
            <div className='container'>
                <NavBar/>
                <Registerfom                
                handleDatos={handleDatos}
                handleRegister={handleRegister}
                Name = {Name}
                Email = {Email}
                Pass = {Pass}
                RPass = {RPass}
                />
            </div>
        </>
    )
}

export default HomeRegi