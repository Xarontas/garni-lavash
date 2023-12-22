import { Routes, Route } from "react-router-dom";
import './App.css'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact';
import Products from './pages/Products';

function App() {
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

    </>
  )
}

export default App
