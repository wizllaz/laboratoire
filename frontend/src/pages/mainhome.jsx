// SwiperSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Navbar from "./navbar";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./mainhome.css"; // Ton CSS personnalisé

import Labo1 from "../images/labo1.jpg";
import Labo2 from "../images/labo2.jpg";
import Labo3 from "../images/labo3.jpg";

const slides = [
  {
    image: Labo1,
    title: "Laboratoire DR MEHALHAL",
    subtitle: "Une équipe à votre écoute",
    description:
      "Nos biologistes qualifiés vous accompagnent et répondent à toutes vos questions médicales.",
      buttonText: "Contactez-nous",
  },
  {
    image: Labo2,
    title: "Laboratoire DR MEHALHAL",
    subtitle: "Fiabilité et précision",
    description:
      "Nous utilisons des technologies de pointe pour garantir des résultats précis et rapides.",
      buttonText: "Contactez-nous",
  },
  {
    image: Labo3,
    title: "Prélèvements sans rendez-vous",
    subtitle: "Service rapide du lundi au samedi",
    description:
      "Présentez-vous directement au laboratoire, sans prise de rendez-vous préalable.",
      buttonText: "rendez-vous",
  },
];

export default function SwiperSlider() {
  return (
    <div className="swiper-container">
        <Navbar/>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        loop={true}
        autoplay={{ delay: 6000,
             disableOnInteraction: false, // keep autoplay running
    pauseOnMouseEnter: false,    // optional: don’t pause when mouse hover
         }}
         speed={1500} 
        pagination={{ clickable: true }}
        navigation
        className="custom-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <img src={slide.image} alt={`slide-${index}`} className="slide-img" />
              <div className="overlay-text">
                <h2>{slide.title}</h2>
                <h3>{slide.subtitle}</h3>
                <p>{slide.description}</p>
                <button className="button-slide" ><link rel="stylesheet" href="#" />{slide.buttonText}</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
