import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVial, faFlask } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom';

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
             <li><a href="#home">Home</a></li>
             <li><a href="#about">À propos de nous</a></li>
             <li><a href="#service">Services</a></li>
             <li><a href="#about">Contact</a></li>
             <li><a href="#about">Position</a></li>
                <a rel="stylesheet" href="#rendezvous" className='buttonnave' >Rendez-vous</a>
            </ul>

         

        </nav>
    )
}