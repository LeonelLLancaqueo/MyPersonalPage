import "./MenuNav.css";

import { Link } from "react-router-dom";


const MenuNav = ()=>{
    
    

    
    return(

        <nav>
            <ul className="nav-li">
                <li><Link className="enlace-nav" to="/">Inicio</Link></li>
            </ul>                
        </nav>
            

        
       
    )
} 

export default MenuNav;