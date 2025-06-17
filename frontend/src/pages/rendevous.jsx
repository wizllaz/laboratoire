import emailjs from 'emailjs-com';
import React from 'react';
import { useState } from 'react';
import "./rendevous.css"





export default function Rendezvous() {
  const [formData, setFormData] = useState({
    service: '',
    name: '',
    address: '',
    email: '',
    phone: ''
  });
    const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_eps2ijo', 'template_uurwc3a', formData, 'Mni6gEBBQonDLIIqr')
      .then((result) => {
        console.log(result.text);
        alert('Email envoyé avec succès!');
      }, (error) => {
        console.log(error.text);
        alert('Erreur lors de l\'envoi de l\'email.');
      });
    }
 return(
    <>
     <div className="rebdevous-continer" >
         <div className='mapcontiner' >
            <div className='map' >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1223.1405854468467!2d-0.6439709687705797!3d35.693219470820814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7e890020538b8b%3A0xb441bbd9bc167464!2sLABORATOIRE%20Dr%20MEHALHAL!5e0!3m2!1sen!2sdz!4v1750109106688!5m2!1sen!2sdz"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Laboratoire Location"
      ></iframe>
  
    </div>
         </div>
   <form onSubmit={handleSubmit} className='form-rende' >
    <h1> 
Prendre un rendez-vous
    </h1>
      <select name="service" value={formData.service} onChange={handleChange} className='input'  >
         <option value="" disabled selected hidden>Choisissez un service</option>
        <option value="Prélèvements à domicile" className='input' >Prélèvements à domicile</option>
        <option value="Se rendre au laboratoire" className='input' >Se rendre au laboratoire</option>
      </select>

      <input type="text" name="name" placeholder="Nom complet" value={formData.name} onChange={handleChange} required  className='input' />
      <input type="text" name="address" placeholder="Adresse" value={formData.address} onChange={handleChange} required   className='input' />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required  className='input'  />
      <input type="tel" name="phone" placeholder="Numéro de téléphone" value={formData.phone} onChange={handleChange} required  className='input'  />

      <button type="submit" className='button-form' >Envoyer</button>
    </form>

     </div>
       
</>
 )   
}