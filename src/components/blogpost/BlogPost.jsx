import React, { useEffect, useRef } from "react";
import "./blogpost.css";
import Socials from "../socials/Socials";

const BlogPost = ({ posts, getPostedAgo, onPostVisible }) => {
  const postRefs = useRef({}); // refs for each post

  useEffect(() => {
    const observers = [];

    posts.forEach((post) => {
      const postRef = postRefs.current[post.id];
      if (!postRef) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            onPostVisible(post.slug);
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(postRef);
      observers.push(observer);
    });

    return () => {
      // Clean up obs
      observers.forEach((observer) => observer.disconnect());
    };
  }, [posts, onPostVisible]);

  return (
    <div className="blog-content">
      {posts.map((post) => (
        <div className="article-wrapper" key={post.id}>
          <article
            className="blog-post"
            ref={(el) => (postRefs.current[post.id] = el)}>
            <img
              src={post._embedded["wp:featuredmedia"]?.[0]?.source_url}
              alt={post.title.rendered}
            />
            <header>
              <p>By: {post._embedded?.author?.[0].name}</p>
              <p className="posted-ago">{getPostedAgo(post.date)}</p>
              <h1>{post.title.rendered}</h1>
              <Socials slug={post.slug} />
            </header>
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </article>
          <div className="ads">
            <p>Place your ads here!</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPost;
