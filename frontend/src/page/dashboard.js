import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/navbar";
import CardTask from "../components/cardTasks";


const Dashboard = ()=>{

    const [data, setData] = useState({})
    
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


    if (data.have) {
        return(
            <>
                <div className="container">
                    <NavBar/>
                    <CardTask data={data}/>
                </div>
                
            </>
        )
        
    }else{
        return(
            <>
                <div className="container">
                    <NavBar/>
                </div> 
            </>
        )
        
    }

      

    
}

export default Dashboard