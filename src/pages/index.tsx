import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import React, { useState, useEffect} from "react";
import { posts } from "../data";

const inter = Inter({ subsets: ['latin'] })

// const goodreads_rss_url = 'https://www.goodreads.com/user/updates_rss/108357320'

export default function Home() {
  // fetch(goodreads_rss_url)
  // .then(response => response.text())
  // .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  // .then(data => console.log(data))

  return (
    <div className="Home">
      <header className="Home-header">
        <header>
          <div>
            <nav className="navBarTab">
            <a href="#About" id="navBtn">About</a>
            <a href="#Blog" id="navBtn">Blog</a>
            <a href="#Contact" id="navBtn">Contact</a>
            </nav>
            <div className="underHeader">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
          <div className="insideFooter">
              <a href="https://www.linkedin.com/in/jacob-johnson-05bb79169/" target="blank" className="fa fa-linkedin fa-xs"  id="socialIcons"/>
              <a href="hhttps://github.com/JacobJohnson1" target="blank" className="fa fa-github fa-xs" id="socialIcons" />
              <a href="https://stackoverflow.com/users/15369768/jake-johnson" target="blank" className="fa fa-stack-overflow fa-xs" id="socialIcons" />
              <a href="mailto: therealjakejohnson@gmail.com" className="fa fa-envelope-o fa-xs" id="socialIcons" />
          </div>
          </div>
          </div>
        </header>
      </header>
      <div id='About'>
        <p>
          My name is Jacob Johnson. I have a degree in computer science from the University of Missouri - 
          Kansas City and I am a software engineer 
          for an insurance company. 
          <br></br>
          <br></br>
          This site has been created from scratch by me, so please 
          feel free to read about the projects I have worked on, books read, 
          and anything else on here.
        </p>
      </div>
      <section id="Blog" className='Blog'>
        <div>
          <div className={styles.skillsGrid}>
            {posts.map((post) => (
              <a key={post.url} href={post.url}>
                <div className="posts">
                  <span>{post.title}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )          
}
