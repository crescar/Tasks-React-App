import React from 'react'
import '../styles/generalStyles.css'

const CardTask = ({data, Title, Description, UrlImg, handleGetDatos, handleSaveTaks, handleEditTaks, 
    handleDeleTaks, Task, ImgURL, handleUpdatevalues, handleUpdateTask})=>{
    const defaultImg = 'https://unpaper.com/wp-content/uploads/2019/06/22.-How-to-properly-utilise-the-task-list-to-complete-the-list-of-tasks.png'
    if(data){
        const Datos = data.results

        const taks = Datos.map((dato, index)=>
        <div className="col s12 m6 l4 cardEfect" key={index}>
            <div className="card">
                <div className="card-image">
                <img src={dato.ImgURL || defaultImg} />
                <span className="card-title cyan-text text-darken-1">{dato.Title}</span>
                </div>
                <div className="card-content center-align">
                <p>{dato.Description}</p>
                </div>
                <div className="card-action center-align">
                <a><i className="material-icons" onClick={() => handleEditTaks(dato.IDTasks)}>create</i></a>
                <a><i className="material-icons" onClick={() => handleDeleTaks(dato.IDTasks)}>delete</i></a>
                <a><i className="material-icons">check_box</i></a>
                </div>
            </div>
        </div>
        )
        return(
            <>
            <div className='row'>
                {taks}
            </div>  
            </>
        )
    }else{
        if (Task) {
            return(
                <>
                    <div className='row'>
                        <div className="col s12 m6 l6 cardEfect">
                            <div className="card">
                                <div className="card-image">
                                <img src={ ImgURL ||defaultImg} />
                                <span className="card-title cyan-text text-darken-1">{Title}</span>
                                </div>
                                <div className="card-content center-align">
                                <p>{Description}</p>
                                </div>
                            </div>
                        </div> 
                        <div className="col s12 m6 l6 Fondo">
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="Title" type="text" className="validate"  name="Title"
                                        onChange={handleUpdatevalues} value={Title}/>
                                        <label htmlFor="Title" >Title</label>
                                    </div>
                                    <div className="input-field col s12">
                                        <input id="Img" type="text" className="validate" name="UrlImg"
                                        onChange={handleUpdatevalues} value={ImgURL}/>
                                        <label htmlFor="Img">Link Image</label>
                                    </div>
                                    <div className="input-field col s12">
                                        <textarea id="Description" className="materialize-textarea" name='Description'
                                        onChange={handleUpdatevalues} value={Description}></textarea>
                                        <label htmlFor="Description">Description</label>
                                    </div>
                                    <a className="waves-effect waves-light btn-large" onClick={handleUpdateTask}>Update</a>
                                </div>
                        </div>
                    </div>
                </>
            )
        }else{
            return(
                <>
                    <div className='row'>
                        <div className="col s12 m6 l6 cardEfect">
                            <div className="card">
                                <div className="card-image">
                                <img src={ UrlImg ||defaultImg} />
                                <span className="card-title cyan-text text-darken-1">{Title}</span>
                                </div>
                                <div className="card-content center-align">
                                <p>{Description}</p>
                                </div>
                            </div>
                        </div> 
                        <div className="col s12 m6 l6 Fondo">
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="Title" type="text" className="validate"  name="Title"
                                        onChange={handleGetDatos} value={Title}/>
                                        <label htmlFor="Title" >Title</label>
                                    </div>
                                    <div className="input-field col s12">
                                        <input id="Img" type="text" className="validate" name="UrlImg"
                                        onChange={handleGetDatos} value={UrlImg}/>
                                        <label htmlFor="Img">Link Image</label>
                                    </div>
                                    <div className="input-field col s12">
                                        <textarea id="Description" className="materialize-textarea" name='Description'
                                        onChange={handleGetDatos} value={Description}></textarea>
                                        <label htmlFor="Description">Description</label>
                                    </div>
                                    <a className="waves-effect waves-light btn-large" onClick={handleSaveTaks} >Save</a>
                                </div>
                        </div>
                    </div>
                </>
            ) 
        }
        
    }  
}

export default CardTask