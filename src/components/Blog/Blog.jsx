import { useEffect, useState } from "react";
import supabase from "../../config/SupabaseClient";
import Transition from "../../transition";
import "./Blog.css";
import { motion } from "framer-motion";

function Blog() {
  const [fetchError, setFetchError] = useState(null);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase.from("blog").select();

      if (error) {
        setFetchError("Could not fetch Blog posts");
        setPosts(null);
      }
      if (data) {
        setPosts(data);
        setFetchError(null);
      }
    };

    fetchPost();
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
          {fetchError && <p>{fetchError}</p>}
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
                  <img src="" alt="" className="blog__img" />
                  <div className="blog__data">
                    <h2 className="blog__title">{post.title}</h2>
                    <p className="blog__description">{post.description}</p>
                  </div>
                  <div className="blog__shadow"></div>
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
