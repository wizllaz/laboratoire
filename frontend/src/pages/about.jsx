import "./about.css";
import abtimg from "../images/abt-img.jpg";
import logoabt from "../images/experiment.png"
export default function About() {
    return (
        <div className="about-container">
           <div className="img-abt" >
                <img src={abtimg} alt="about lab"  className="abtimg"  />
           </div>
           <div className="para-about" >
            <div className="title-abt" >
                <img src={logoabt} alt="" />
                <h3>about lab DR MEHALHAL</h3>
            </div>
            <p className="sec-1-abt" >  Expertise en Biologie Générale et Spécialisée</p>
            <p className="sec-2-abt" >Notre laboratoire est dédié à la biologie médicale, aussi bien générale que spécialisée, offrant une large gamme 
                d’analyses pour le diagnostic, le suivi thérapeutique et la prévention. Grâce à des équipements de pointe et à 
                une équipe de biologistes qualifiés, 
                nous assurons des résultats fiables, rapides et conformes aux normes internationales.</p>
                <p className="sec-3-abt" >Nous mettons un point d’honneur à accompagner les patients et les professionnels de santé avec précision et 
                    rigueur scientifique, dans des domaines variés tels que l’hématologie, 
                    l’immunologie, la microbiologie ou encore la biologie moléculaire.</p>
           </div>
        </div>
    );
}