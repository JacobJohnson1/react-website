import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js'
import Footer from './components/Footer';
import Blog from './components/Blog';
import About from './components/About';
import BlogHome from './pages/BlogHome';
import Post1 from './pages/Post1';
import { Component } from 'react';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  


  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/BlogHome' element={<BlogHome />} />
      <Route path='/Post1' element={<Post1 />} />
    </Routes>
  );
}

export default App;
