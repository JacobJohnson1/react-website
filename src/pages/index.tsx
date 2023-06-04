import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import React, { useState, useEffect} from "react";
import { posts } from "../data";
import Paginate from '../Paginate';

const inter = Inter({ subsets: ['latin'] })

// const goodreads_rss_url = 'https://www.goodreads.com/user/updates_rss/108357320'

export default function Home() {
  // fetch(goodreads_rss_url)
  // .then(response => response.text())
  // .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  // .then(data => console.log(data))

  const [blogPosts, setBlogPosts] = useState(posts);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
 
  const paginate = (pageNumber: React.SetStateAction<number>) => {
    setCurrentPage(pageNumber);
  };

  const previousPage = () => {
    if (currentPage !== 1) {
       setCurrentPage(currentPage - 1);
    }
 };

 const nextPage = () => {
    if (currentPage !== Math.ceil(blogPosts.length / postsPerPage)) {
       setCurrentPage(currentPage + 1);
    }
 };

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
        <p className='smallBody'>
          My name is Jacob Johnson. I have a degree in computer science from the University of Missouri - Kansas City and I am a software engineer 
          for an insurance company! 
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
      <section id="footer">
        <p className='smallBody'>Page x of x
        <a className='smallBody' href="/page/2"> &gt;&nbsp;&gt;&nbsp;&gt;</a>
        </p>
      </section>
      <Paginate
        postsPerPage={postsPerPage}
        totalPosts={blogPosts.length}
        paginate={paginate} 
        currentPage={currentPage} 
        previousPage={previousPage} 
        nextPage={nextPage}      
      />
    </div>
  )

//   return (
//     <div className="container">
//        <div className="title">
//           <h1>Blog</h1>
//        </div>
//        {blogPosts ? (
//           <div className="blog-content-section">
//              <div className="blog-container">
//                 {blogPosts.map((blogPost) => (
//                    <div className="blog-post" key={blogPost.id}>
//                       <img className="cover-img" src={blogPost.url} alt="" />
//                       <h2 className="title">{blogPost.title}</h2>
//                       <div className="card-details">
//                          <div className="lh-details">
//                             {/* <img
//                                className="author-img"
//                                src={blogPost.author.profilePicture.url}
//                                alt=""
//                             /> */}
//                             <p className="date">
//                                {new Date(`${blogPost.date}`).toLocaleDateString(
//                                   'en-us',
//                                   {
//                                      year: 'numeric',
//                                      month: 'short',
//                                      day: 'numeric',
//                                   }
//                                )}
//                             </p>
//                          </div>
//                          <a
//                             href={blogPost.url}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="read-more"
//                          >
//                             Read post
//                          </a>
//                       </div>
//                    </div>
//                 ))}
//              </div>
//           </div>
//        ) : (
//           <div className="loading">Loading...</div>
//        )}
//     </div>
//  );
}
