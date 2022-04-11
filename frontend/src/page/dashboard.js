import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/navbar";
import CardTask from "../components/cardTasks";
import '../styles/generalStyles.css'

const Dashboard = ()=>{

    const navigate = useNavigate()
    const [data, setData] = useState({})
    const defaultImg = 'https://unpaper.com/wp-content/uploads/2019/06/22.-How-to-properly-utilise-the-task-list-to-complete-the-list-of-tasks.png'
    useEffect(() => {
        if(! Object.keys(data).length ){
            handleTasks()
        }
    
      return () => {
        handleTasks()
      };
    }, [])

    const handleTasks = async ()=>{
            const Datos = {token: localStorage.getItem('token')}
            let URL = 'http://localhost:3100/getTasks'
            let options ={method: 'POST',headers: {'Content-Type': 'application/json;charset=utf-8'} ,body: JSON.stringify(Datos)}
            let responts = await fetch(URL,options)
            const results = await responts.json()
            setData(results)
    }

    const [IDTask, setIDTask] = useState('')

    const handleEditTaks = (dato)=>{
        navigate('/editTask/' + dato)
    }

    const handleDeleTaks = async (dato)=>{
        let token = localStorage.getItem('token')
        if (token) {
            let Datos = {token: token , IDTask: dato}
            let URL = "http://localhost:3100/deleteTask"
            let options ={method: "DELETE",headers: {'Content-Type': 'application/json;charset=utf-8'} ,body: JSON.stringify(Datos)}
            let responts = await fetch(URL,options)
            let results = await responts.json()
            if (results.acceso) {
                handleTasks()
            }else{
                alert(results.mensaje)
            }
        }else{
            console.log('opereacion no autorizada')
        }
    }


    if (data.have) {
        return(
            <>
                <div className="container">
                    <NavBar/>
                    <div className="row">
                        <div className="col sa12 m12 l12">
                        <CardTask data={data} handleEditTaks={handleEditTaks} handleDeleTaks={handleDeleTaks}/>
                        </div>
                    </div>
                </div>
                
            </>
        )
        
    }else{
        return(
            <>
                <div className="container">
                    <NavBar/>
                    <div className="row">
                        <div className="col s12 m12 l12 cardEfect">
                            <div className="card">
                                <div className="card-image">
                                <img src={defaultImg}/>
                                <span className="card-title cyan-text text-darken-1">don't have slopes tasks</span>
                                </div>
                                <div className="card-content center-align">
                                <p>add whith under button </p>
                                </div>
                                <div className="card-action center-align">
                                <Link to='/newtask'><i className="material-icons">add</i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </>
        )
        
    }

      

    
}

export default Dashboard