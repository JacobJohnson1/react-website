import React from "react";
import '../App.css';
import { posts } from "../data";

export default function Blog() {
  return (
    <section id="Blog">
      <p>Blog</p>
      <div>
        <div className="skillsGrid">
          {posts.map((post) => (
            <div key={post} className="posts">
                <span>{post}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}