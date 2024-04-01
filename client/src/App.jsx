import React from 'react';
import Navigation from './components/navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import NewHome from './components/newHome';
import Banner from './components/banner';
import Contact from './pages/contact';
import Login from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/dashboard';












function App() {
  return (
    <Router>
    
   
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/c" element={<Contact/>} />
      <Route path="/l" element={<Login/>} />
      <Route path="/r" element={<Register/>} />
      <Route path="/d" element={<Dashboard/>} />
      </Routes>
    </Router>
  )
}

export default App
