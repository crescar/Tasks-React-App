import React, {useState} from "react";
import NavBar from "../components/navbar";
import CardTask from "../components/cardTasks";

const NewTask = ()=>{

    const [Title, setTitle] = useState('')
    const [Description, setDescription] = useState('')
    const [UrlImg, setUrlImg] = useState('')
    
    const handleGetDatos = (e)=>{
        if(e.target.name === 'Title'){
            setTitle(e.target.value)
            console.log(Title)
        }
        if(e.target.name === 'Description'){
            setDescription(e.target.value)
            console.log(Description)
        }
        if(e.target.name === 'UrlImg'){
            setUrlImg(e.target.value)
            console.log(UrlImg)
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
                />
            </div>
        </div>
       </> 
    )
}

export default NewTask