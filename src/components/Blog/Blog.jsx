import Transition from "../../transition";
import "./Blog.css";
import { Link } from "react-router-dom";
import { posts } from "../../data/BlogDetail";
import newsSVG from "../../assets/news/newspaper.png";
import { motion } from "framer-motion";
import supabase from "../../config/SupabaseClient";
import { useEffect, useState } from "react";

function Blog() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from("blog").select();

      if (error) {
        console.error("Error fetching data:", error.message);
      } else {
        setData(data);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Transition />
      <motion.section
        className="blog"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.65,
        }}
      >
        <div className="title__container news__header">
          <div className="overlay"></div>
          <div className="title__front">
            <h1 className="section__title">News</h1>
          </div>
        </div>
        <div className="blog__container">
          <div className="hero-img-container">
            <img
              src={newsSVG}
              alt=""
              className="products__hero-img img__hero"
            />
          </div>
          {data && (
            <motion.div
              className="posts"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.65,
              }}
            >
              {data.map((blog) => (
                <article className="blog__card" key={blog.title}>
                  <img
                    src={blog.image}
                    alt=""
                    className="blog__img"
                    loading="lazy"
                  />
                  <div className="blog__data">
                    <h2 className="blog__title">{blog.title}</h2>
                    <p className="blog__description">{blog.description}</p>
                    <Link to={`/blog/${blog.id}`} className="blog__more">
                      Read More
                    </Link>
                  </div>
                </article>
              ))}
            </motion.div>
          )}
        </div>
      </motion.section>
    </>
  );
}

export default Blog;
