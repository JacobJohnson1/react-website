import React from "react";
import '../App.css';
import { posts } from "../data";

export default function Posts() {
  return (
    <section id="Blog">
      <h1>Blog</h1>
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