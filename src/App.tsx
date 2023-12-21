import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import './App.css'
// import TopCarousel from './TopCarousel';
import SectionTitle from './SectionTitle';
import Section1 from './Section1';
import Footer from './Footer';
import DivTop from './DivTop';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact';
import Products from './pages/Products';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="Products" element={<Products />} />
        <Route path="Contact" element={<Contact />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </ Routes>
      {/* <DivTop />
      <SectionTitle />
      <Section1 />
      <Footer /> */}
      {/* <About /> */}
      {/* <Contact /> */}
      {/* <Products /> */}
      {/* <Home /> */}

    </>
  )
}

export default App
