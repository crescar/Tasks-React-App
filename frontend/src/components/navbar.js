import React, {useState ,useEffect} from "react";
import { Link } from "react-router-dom";


const NavBar = () =>{

    const [token, setToken] = useState(false)

    useEffect(()=>{
        const getToken = localStorage.getItem('token')
        if(getToken){
            setToken(true)
        }else{
            setToken(false)
        }
    })


    const handleLongout = ()=>{
        localStorage.removeItem('token')
    }

    if(token){

        return(
            <>
                <nav>
                    <div className="nav-wrapper">
                        <Link to='/dashboard' className="brand-logo">Taks React App</Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to="/newtask">Create a new Taks</Link></li>
                            <li><Link to="/" onClick={handleLongout}>LongOut</Link></li>
                        </ul>
                    </div>
                </nav>
            </>
        )

    }else{
        return(
            <>
                <nav>
                    <div className="nav-wrapper">
                        <Link to='/' className="brand-logo">Taks React App</Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to="/">Login</Link></li>
                            <li><Link to="/Register">Register</Link></li>
                        </ul>
                    </div>
                </nav>
            </>
        )
    }

    
}

export default NavBar