import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import React from "react";
import { books, posts } from "../data";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <header>
          <div>
            <nav className="navBarTab">
            <a href="#About" id="navBtn">about</a>
            <a href="#Blog" id="navBtn">blog</a>
            <a href="#Book" id ='navBtn'>books</a>
            <a href="#Contact" id="navBtn">contact</a>
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
        <p>about section</p>
        <p className='smallBody'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      
      <section id="Blog">
        <p>blog</p>
        <a href="/BlogHome" className='smallBody'>see all</a>
        <div>
          <div className="skillsGrid">
            {posts.map((post) => (
              <a key={post.link} href={post.link}>
                <div className="posts">
                  <span>{post.name}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section id="Books">
        <p>books</p>
        <a href='' className='smallBody'>see all</a>
        <div>
          <div className="skillsGrid">
            {books.map((books) => (
              <a key={books.link} href={books.link}>
                <div className="posts">
                  <span>
                    {/* {books.name} */}
                    <Image src={books.image} className='postPic' alt='{books.name}'></Image>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
