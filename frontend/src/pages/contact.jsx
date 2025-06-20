import logo from "../images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

import "./contact.css";



export default function Contact() {
    return(


        <>
        <div className="contactcontiner" >
          <div className="section-1" >
               <div className="logocontact" >
                <img src={logo} alt=""   />
             </div>
             <p >
                Il existe de nombreuses variantes de passages disponibles
                 mais la majorité ont été modifiées d'une manière ou d'une autre par de l'humour ajouté
             </p>
 <div className="social-links">
      <a href="https://www.instagram.com/your_username" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} size="2x"  className="iconlink" />
      </a>
      <a href="https://www.facebook.com/your_username" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} size="2x"  className="iconlink" />
      </a>
      <a href="https://twitter.com/your_username" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faXTwitter} size="2x"  className="iconlink" />
      </a>
    </div>

          </div>
           <div className="section-1" >
              <div> 
                <h1 className="title-quick" >quick link</h1>
                </div>
                <ul className="quicklinks">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">À propos de nous</a></li>
                    <li><a href="#service">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#rendezvous">Rendez-vous</a></li>
                </ul>
         
    
          </div>
           <div className="section-1" >
                <div className="contact-info">
                    <h1 className="title-quick2" >Contact Information</h1>
                    <p className="info"> 
                    <FontAwesomeIcon icon={faLocationDot} className="icon" />
                         Adresse: 123 Rue de l'Exemple, Ville, Pays</p>
                    <p className="info">
                        
                    <FontAwesomeIcon icon={faPhone} className="icon" />
                        Téléphone: +123 456 7890</p>
                    <p className="info">
                    <FontAwesomeIcon icon={faEnvelope} className="icon" />
                        Email: drmehalhal@gmail.com </p>

                    </div>

          </div>
         
        </div>
        </>
    )
}