import React from "react";
import '../App.css';
import { posts } from "../data";

export default function Blog() {
  return (
    <section id="Blog">
      {/* <a href="/BlogHome">blog</a>
      <br></br>
      <br></br> */}
      <div>
        <div className="skillsGrid">
          {posts.map((post) => (
            <a href={post.link}>
              <div key={post} className="posts">
                <span>{post.name}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}