import "./service.css";
import ser1 from "../images/ser1.jpg";
import ser2 from "../images/ser2.jpg";
import ser3 from "../images/ser3.jpg";
import ser4 from "../images/ser4.jpg";
import ser5 from "../images/ser5.jpg";
import ser6 from "../images/ser6.jpg";
import flat1 from "../images/flat1.png";
import flat2 from "../images/flat2.png";
import flat3 from "../images/flat3.png";
import flat4 from "../images/flat4.png";
import flat5 from "../images/flat5.png";
import flat6 from "../images/flat6.png";
import React from 'react';
import { useState } from "react";

export default function Service() {

   const card = [
    {
        title: "Analyses de routine",
        description: "Prélèvements sanguins, urinaires et bilans standards pour le diagnostic et la prévention.",
        image: ser1 ,
        flatIcon: flat4
    },
    {
        title: "Biologie spécialisée",
        description: "Analyses avancées : sérologies, hormonologie, biologie moléculaire et dépistages ciblés.",
        image: ser2 , 
        flatIcon: flat5
    },
    {
        title: "Immunologie et hématologie",
        description: "Études complètes du système immunitaire et des cellules sanguines pour un diagnostic précis.",
        image: ser3 ,
        flatIcon: flat1
    },
    {
        title: "Microbiologie",
        description: "Dépistage et identification des bactéries, virus et champignons avec antibiogramme.",
        image: ser4 ,
        flatIcon: flat2
    },
    {
        title: "Examens urgents",
        description: "Traitement rapide et délivrance express des résultats pour les situations critiques.",
        image: ser5 ,
        flatIcon: flat3
    },
    {
        title: "Prélèvements à domicile",
        description: "nous venons chez vous pour réaliser vos prélèvements en toute sécurité.",
        image: ser6 ,
        flatIcon: flat6
    }
];


const [isAnimated, setIsAnimated] = useState(null);

    return (
        <div className="service-container">
          
            <div className="line-container">
                  <h1>Nos Services</h1>
      <div className="line">
        <div className="ball"></div>
      </div>
    </div>
    <div className="card-continer" >
        {card.map((item, index) => (
            <div className={` card  ${isAnimated=== index ? "animatedcard" : ""}`} 
            key={index} 
            onMouseEnter={()=>setIsAnimated(index)}
            onMouseLeave={()=>setIsAnimated(null)}

            >
                <img src={item.image} alt={item.title} className="card-image" />
                <div className={
                    `flaticon ${isAnimated === index ? "animatedflaticon" : ""}`
                } >
                <img src={item.flatIcon} alt="" />
                </div>
               <div className={ `ser-dis ${isAnimated === index ? "animatedser-dis" : ""} `}  >
                 <h2 className={`card-title  ${isAnimated === index ? "animatedcard-title" : ""} `}>{item.title}</h2>
                <p className={
                     `card-description ${isAnimated === index ? "animatedcard-description" : "" }`}>{item.description}</p>
                 <div className={`card-button ${isAnimated === index ? "animatedcard-button" : "" }`} >
                     <span>  en savoir plus</span>
                 </div>
               </div>
               
            </div>

        ))}

    </div>
     
    </div>
        
    );
}