import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar'
import Home from './components/pages/Home/home'
import Experience from './components/pages/experience/experience'
import Offers from './components/pages/Offers/offers'
import Footer from './components/footer/footer'
import Destinations from './components/pages/Destinations/destinations'

const App =() => {
  return(
    <Router>
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/offers" element={<Offers />} />
      </Routes>
      <Footer />
    </div>
  </Router>
  )
}


export default App
