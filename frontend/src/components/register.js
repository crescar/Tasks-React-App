import React from 'react';
import '../styles/generalStyles.css'

const Registerfom = ({handleDatos, handleRegister, Name, Email, Pass, RPass})=>{

    return(
        <>
           <div className='Fondo'>
               <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="name" type="text" className="validate" name="Name"
                                onChange={handleDatos} value={Name}/>
                                <label htmlFor="name" >Full Name</label>
                            </div>
                            <div className="input-field col s12">
                                <input id="Email" type="email" className="validate" name="Email"
                                onChange={handleDatos} value={Email}/>
                                <label htmlFor="Email">Email</label>
                            </div>
                            <div className="input-field col s12">
                                <input id="Pass" type="password" className="validate" name="Pass"
                                onChange={handleDatos} value={Pass}/>
                                <label htmlFor="Pass">Password</label>
                            </div>
                            <div className="input-field col s12">
                                <input id="RPass" type="password" className="validate" name="RPass"
                                onChange={handleDatos} value={RPass}/>
                                <label htmlFor="RPass">Repect Password</label>
                            </div>
                            <a className="waves-effect waves-light btn-large" onClick={handleRegister} >Register</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Registerfom