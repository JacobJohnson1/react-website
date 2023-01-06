import React from "react";
import '../App.css';

export default function Footer() {
    return (
      <section id="Footer">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <div>
            <h1>Contact</h1>
              <a href="https://www.linkedin.com/in/jacob-johnson-05bb79169/" target="blank" class="fa fa-linkedin" id="socialIcons"></a>
              <a href="hhttps://github.com/JacobJohnson1" target="blank" class="fa fa-github" id="socialIcons"></a>
              <a href="https://stackoverflow.com/users/15369768/jake-johnson" target="blank" class="fa fa-stack-overflow" id="socialIcons"></a>
              <a href="mailto: therealjakejohnson@gmail.com" class="fa fa-envelope-o" id="socialIcons"></a>
        </div>
      </section>
    );
  }
  