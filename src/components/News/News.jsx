import React, { useEffect, useState } from "react";
import "./news.css";
import { useParams } from "react-router-dom";
/* import { posts } from "../../data/BlogDetail"; */ // Import your array of blog posts
import Transition from "../../transition";
import { motion } from "framer-motion";
import supabase from "../../config/SupabaseClient";

function News() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from("blog")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching data:", error.message);
      } else {
        setPost(data);
      }
    }

    fetchData();
  }, [id]);

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
      <div className="title__container news__header">
        <div className="overlay"></div>
        <div className="title__front">
          <h1 className="section__title">News</h1>
        </div>
      </div>

      <div className="post__container">
        {post && (
          <article className="post__data">
            <img
              src={post.image}
              alt={post.title}
              className="post__img"
              loading="lazy"
            />
            <h2 className="post__title">{post.title}</h2>
            <p className="post__description">{post.text}</p>
          </article>
        )}
      </div>
    </motion.section>
  );
}

export default News;
