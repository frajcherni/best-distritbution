import Navbar from './home/Navbar';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './home/Home'
import Devis from './Devis';
import ContactForm from './ContactForm';
import Footer from './home/Footer';
import About from './home/About'
import ItemDetails from './home/ItemDetails';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Devis" element={<div>
          <Navbar/>
          <Devis/>
          <Footer/>
        </div>} />

        <Route path="/details" element={<div>
          <Navbar/>
          <ItemDetails/>
          <Footer/>
        </div>} />

        <Route path="/apropos" element={<div>
          <Navbar/>
          <About/>
          <Footer/>
        </div>} />
        
        <Route path="/Contacter-Nous" element={<>
        <Navbar/>
        <ContactForm/>
        <Footer/>
        </>} />

        {/* <Route path="/Catalogue" element={<Catalogue />} />
        <Route path="/A-Propos-Nous" element={<AboutUs />} />
        <Route path="/item1" element={<Item1 />} />
        <Route path="/item2" element={<Item2 />} />
        <Route path="/item3" element={<Item3 />} /> */}
        <Route path='/*' element={<Navigate to={'/Home'} />}/>
      </Routes>
    </Router>
    
  )
}

export default App