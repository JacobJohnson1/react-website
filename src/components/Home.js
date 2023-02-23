import '../App.css';
import Navbar from './Navbar.js'
import Footer from './Footer';
import Blog from './Blog';
import About from './About';
// import BlogHome from './pages/BlogHome';
import { Component } from 'react';

function Home() {
  return (
    <div className="Home">
    <header className="Home-header">
        <Navbar />
        
    </header>
    <About />
    <p>blog</p>
    <Blog />
    <a href="/BlogHome">see all</a>

    <Footer />
    </div>
  );
}

export default Home;