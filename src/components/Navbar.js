import React from "react";
import '../App.css';


export default function Navbar() {
    return (
      <header>
        <div>
          <nav className="navBarTab">
          <a href="#Skills" id="navBtn">
              Skills
            </a>
            <a href="#Blog" id="navBtn">
              Blog
            </a>
            <a href="#Contact" id="navBtn">
            Contact
            </a>
          </nav>
        </div>
      </header>
    );
  }
  