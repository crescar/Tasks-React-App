import React, {useState } from "react";
import NavBar from "../components/navbar";
import CardTask from "../components/cardTasks";
import { useNavigate } from 'react-router-dom';

const NewTask = ()=>{

    const [Title, setTitle] = useState('')
    const [Description, setDescription] = useState('')
    const [UrlImg, setUrlImg] = useState('')
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    const handleGetDatos = (e)=>{
        if(e.target.name === 'Title'){
            setTitle(e.target.value)
        }
        if(e.target.name === 'Description'){
            setDescription(e.target.value)
        }
        if(e.target.name === 'UrlImg'){
            setUrlImg(e.target.value)
        }
    }

    const handleSaveTaks = async ()=>{
        if (token) {
            let Datos = {Title: Title, Description: Description, UrlImg: UrlImg, token: token}
            let URL = "http://localhost:3100/createTaks"
            let options ={method: "POST",headers: {'Content-Type': 'application/json;charset=utf-8'} ,body: JSON.stringify(Datos)}
            let responts = await fetch(URL,options)
            let results = await responts.json()
            if (results.acceso) {
                navigate('/dashboard')
            }else{
                alert(results.mensaje)
            }
        }else{
            console.log('opereacion no autorizada')
        }
        
        
    }

    return(
       <>
        <div className="container">
            <NavBar/>
            <div className="row">
                <CardTask
                Title ={Title}
                Description = {Description}
                UrlImg = {UrlImg}
                handleGetDatos = {handleGetDatos}
                handleSaveTaks = {handleSaveTaks}
                />
            </div>
        </div>
       </> 
    )
}

export default NewTask