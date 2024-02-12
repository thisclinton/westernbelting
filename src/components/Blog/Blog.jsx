import Transition from "../../transition";
import "./Blog.css";
import { Link } from "react-router-dom";
import { posts } from "../../data/BlogDetail";
import { motion } from "framer-motion";

function Blog() {
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
          {posts && (
            <motion.div
              className="posts"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.65,
              }}
            >
              {posts.map((post) => (
                <article className="blog__card" key={post.title}>
                  <img
                    src={post.img}
                    alt=""
                    className="blog__img"
                    loading="lazy"
                  />
                  <div className="blog__data">
                    <h2 className="blog__title">{post.title}</h2>
                    <p className="blog__description">{post.description}</p>
                    <Link to={`/blog/${post.id}`} className="blog__more">
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
