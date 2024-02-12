import React from "react";
import "./news.css";
import { useParams } from "react-router-dom";
import { posts } from "../../data/BlogDetail"; // Import your array of blog posts
import Transition from "../../transition";
import { motion } from "framer-motion";

function News() {
  const { id } = useParams();
  const post = posts.find((post) => post.id === parseInt(id));

  return (
    <motion.section
      className="post"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.65,
      }}
    >
      <Transition />
      <img src={post.img} alt={post.title} className="post__img" />
      <h2 className="post__title">{post.title}</h2>
      <p className="post__description">{post.text}</p>
    </motion.section>
  );
}

export default News;
