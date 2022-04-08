import React from "react";
import NavBar from "../components/navbar";
import CardTask from "../components/cardTasks";

const NewTask = ()=>{
    return(
       <>
        <div className="container">
            <NavBar/>
            <div className="row">
                <CardTask/>
            </div>
        </div>
       </> 
    )
}

export default NewTask