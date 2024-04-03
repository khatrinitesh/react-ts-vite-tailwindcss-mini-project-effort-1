import React,{ useState } from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';

function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Route>
      </Routes>
     </Router>
    </>
  )
}

export default App
