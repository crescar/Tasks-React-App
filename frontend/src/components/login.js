import React from 'react';
import '../styles/generalStyles.css'

const LogiForm = (props)=>{
    const {handleDatos, handleLogin, Email, Pass} = props 
    return(
        <>
            <div className="Fondo">
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="Email" type="email" className="validate" 
                                name="Email" onChange={handleDatos} value={Email}/>
                                <label htmlFor="Email">Email</label>
                            </div>
                            <div className="input-field col s12">
                                <input id="Pass" type="password" className="validate"
                                 name="Pass" onChange={handleDatos} value={Pass}/>
                                <label htmlFor="Pass">Password</label>
                            </div>
                            <a className="waves-effect waves-light btn-large" onClick={handleLogin} >Login</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )

}

export default LogiForm