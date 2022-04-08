import React from 'react'


const CardTask = ({data})=>{
    const defaultImg = 'https://unpaper.com/wp-content/uploads/2019/06/22.-How-to-properly-utilise-the-task-list-to-complete-the-list-of-tasks.png'
    if(data){
        const Datos = data.results
        const taks = Datos.map((dato, index)=>
        <div className="col s12 m6 l4" key={index}>
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
                <div className="col s12 m6 l6">
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
            </>
        )
    }  
}

export default CardTask