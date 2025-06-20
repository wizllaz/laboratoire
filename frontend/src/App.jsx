import SwiperSlider from './pages/mainhome.jsx'
import About from './pages/about.jsx'
import Service from './pages/service.jsx'
import Rendezvous from './pages/rendevous.jsx'
import Contact from './pages/contact.jsx'

import { Router , Routes , Route } from 'react-router-dom'
import './App.css'

function App() {

return(

    <>
        
        <Routes>
            <Route path="/" element={
                <>
                 <SwiperSlider/>
        <section id ="about" >
            <About/>
        </section>
        <section id="service">
            <Service/>
        </section>
        <section id="rendezvous">
            <Rendezvous/>
        </section>
        <section id="contact">
            <Contact/>
        </section>
                </>
            } />
           
        </Routes>
        
</>
)
    
}

export default App
