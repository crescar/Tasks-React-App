import React from "react";
import { Link } from "react-router-dom";
import '../styles/generalStyles.css'

const CompletRegister = () =>{
    return(
        <Link to="/">
            <div className="container">
                <div className="Fondo">
                    <div >
                        <h3>Registro Completado</h3>
                        <p>Go to Back and sesion login</p>
                        <span>Click me for back</span>
                    </div>
                </div>
            </div>
        </Link>  
    )
}

export default CompletRegister