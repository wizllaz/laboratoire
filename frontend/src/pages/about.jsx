import "./about.css";
import abtimg from "../images/abt-img.jpg";
import logoabt from "../images/experiment.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
export default function About() {
    return (
        <div className="about-container">
           <div className="img-abt" >
                <img src={abtimg} alt="about lab"  className="abtimg"  />
           </div>
           <div className="para-about" >
            <div className="title-abt" >
                <img src={logoabt} alt="" />
                <h3>À propos de nous</h3>
            </div>
            <p className="sec-1-abt" >   Un laboratoire <span style={{color:"#1A76D1"}} > fiable</span> et de <span style={{color:"#1A76D1"}} > haute qualité</span> pour vous</p>
            <p className="sec-2-abt" >Notre laboratoire est dédié à la biologie médicale, aussi bien générale que spécialisée, offrant une large gamme 
                d’analyses pour le diagnostic, le suivi thérapeutique et la prévention. Grâce à des équipements de pointe et à 
                une équipe de biologistes qualifiés, 
                nous assurons des résultats fiables, rapides et conformes aux normes internationales.</p>
                <p className="sec-3-abt" >Nous mettons un point d’honneur à accompagner les patients et les professionnels de santé avec précision et 
                    rigueur scientifique, dans des domaines variés tels que l’hématologie, 
                    l’immunologie, la microbiologie ou encore la biologie moléculaire.</p>
                   <div className="supp-info" >
                    <div className="info-phrase" >
                         <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#1A76D1', fontSize: '24px' }} />
                         <span>Des résultats précis et rapides, réalisés avec des équipements modernes.</span>
                    </div>
                     <div  className="info-phrase" >
                         <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#1A76D1', fontSize: '24px' }} />
                         <span>Des prix compétitifs sans compromis sur la qualité des analyses.</span>
                    </div>
                     <div className="info-phrase" >
                         <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#1A76D1', fontSize: '24px' }} />
                         <span>Une équipe professionnelle, engagée et à votre écoute.</span>
                    </div>
                    <div className="info-phrase" >  
                         <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#1A76D1', fontSize: '24px' }} />
                         <span>Possibilité de prélèvements à domicile, sans que vous ayez besoin de vous déplacer.</span>
                    </div>
                   </div>

           </div>
        </div>
    );
}