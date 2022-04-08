import React from 'react'
import '../styles/generalStyles.css'

const CardTask = ({data, Title, Description, UrlImg, handleGetDatos})=>{
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
                <a><i className="material-icons">create</i></a>
                <a><i className="material-icons">delete</i></a>
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
        return(
            <>
                <div className='row'>
                    <div className="col s12 m6 l6 cardEfect">
                        <div className="card">
                            <div className="card-image">
                            <img src={defaultImg} />
                            <span className="card-title cyan-text text-darken-1"></span>
                            </div>
                            <div className="card-content center-align">
                            <p></p>
                            </div>
                        </div>
                    </div> 
                    <div className="col s12 m6 l6 Fondo">
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="Title" type="text" className="validate"  name="Title"/>
                                    <label htmlFor="Title" >Title</label>
                                </div>
                                <div className="input-field col s12">
                                    <input id="Img" type="text" className="validate" name="UrlImg"/>
                                    <label htmlFor="Img">Link Image</label>
                                </div>
                                <div class="input-field col s12">
                                    <textarea id="Description" class="materialize-textarea" name='Description'></textarea>
                                    <label htmlFor="Description">Description</label>
                                </div>
                                <a className="waves-effect waves-light btn-large" >Save</a>
                            </div>
                    </div>
                </div>
            </>
        )
    }  
}

export default CardTask