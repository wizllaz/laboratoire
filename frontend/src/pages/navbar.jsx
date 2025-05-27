import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVial, faFlask } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';


import "./navbar.css";
export default function Navbar(){
   const  [open , setopen] = useState(false)


   function toggleMenu (){
    setopen(!open)
   }
console.log(open)
    return(
        <nav>
            <div className='logo' >
                 <FontAwesomeIcon icon={faVial} className='logo-icon' /> 
                 <p className='name-labo' >DR MEHALHAL</p>
            </div>
              <div className="menu-toggle" onClick={toggleMenu}>
        ☰ 
      </div>
            <ul className = {open? "active" : ""}>
             <li>Home</li>
             <li>About US</li>
             <li>Services</li>
             <li>Contact</li>
             <li>Position</li>
                <button><link rel="stylesheet" href="#" />Rendez-vous</button>
            </ul>

         

        </nav>
    )
}