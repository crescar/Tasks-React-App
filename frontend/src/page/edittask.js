import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import NavBar from '../components/navbar'
import CardTask from '../components/cardTasks'

const EditTask = () =>{

    const [Task, setTask] = useState({})
    const UrlParams = useParams()
    const navigate = useNavigate()
    const [Title, setTitle] = useState('')
    const [Description, setDescription] = useState('')
    const [ImgURL, setImgURL] = useState('')

    useEffect(()=>{
        if(! Object.keys(Task).length){
            handleGetTask()
        }
        return ()=>{
            handleGetTask()
        }
    },[])

    const handleGetTask = async ()=>{
        let token = localStorage.getItem('token')
        if(token){
            let Datos = {token:token, IDTask: UrlParams.IDTask}
            let URL = 'http://localhost:3100/getTask'
            let options ={method: "POST",headers: {'Content-Type': 'application/json;charset=utf-8'} ,body: JSON.stringify(Datos)}
            let responts = await fetch(URL,options)
            let results = await responts.json()
            setTask(results.results[0])
            setTitle(results.results[0].Title)
            setDescription(results.results[0].Description)
            setImgURL(results.results[0].ImgURL)
        }else{
            console.log('Peticion no autorizada')
        }
        

    }


    const handleUpdatevalues = (e)=>{
        if(e.target.name === 'Title'){
            setTitle(e.target.value)
        }
        if(e.target.name === 'Description'){
            setDescription(e.target.value)
        }
        if(e.target.name === 'UrlImg'){
            setImgURL(e.target.value)
        }
    }

    const handleUpdateTask = async ()=>{
        let token = localStorage.getItem('token')
        if(token){
            let Datos = {token:token, IDTask: UrlParams.IDTask, Title: Title, Description: Description, UrlImg: ImgURL}
            let URL = 'http://localhost:3100/updateTaks'
            let options ={method: "PUT",headers: {'Content-Type': 'application/json;charset=utf-8'} ,body: JSON.stringify(Datos)}
            let responts = await fetch(URL,options)
            let results = await responts.json()
            if(results.acceso){
                navigate('/dashboard')
            }else{
                console.log(results)
            }
        }else{
            console.log('Peticion no autorizada')
        }
        
    }

    return(
        <>
            <div className='container'>
                <NavBar/>
                <CardTask Task ={Task} Title={Title} Description={Description} 
                ImgURL = {ImgURL} handleUpdatevalues = {handleUpdatevalues}
                handleUpdateTask = {handleUpdateTask} />
            </div>
        </>
    )
}

export default EditTask