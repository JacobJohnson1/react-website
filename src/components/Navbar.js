import React from "react";
import '../App.css';


export default function Navbar() {
    return (
      <header>
        <div>
          <nav className="navBarTab">
          <a href="#About" id="navBtn">about</a>
          <a href="#Blog" id="navBtn">blog</a>
          <a href="#Contact" id="navBtn">contact</a>
          </nav>
          <div className="underHeader">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <div className="insideFooter">
            <a href="https://www.linkedin.com/in/jacob-johnson-05bb79169/" target="blank" class="fa fa-linkedin fa-xs"  id="socialIcons"/>
            <a href="hhttps://github.com/JacobJohnson1" target="blank" class="fa fa-github fa-xs" id="socialIcons" />
            <a href="https://stackoverflow.com/users/15369768/jake-johnson" target="blank" class="fa fa-stack-overflow fa-xs" id="socialIcons" />
            <a href="mailto: therealjakejohnson@gmail.com" class="fa fa-envelope-o fa-xs" id="socialIcons" />
        </div>
        </div>
        </div>
      </header>
    );
  }
  