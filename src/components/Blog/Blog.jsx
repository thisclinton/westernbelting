import "./Blog.css";

function Blog() {
  const posts = [
    { id: 1, title: "First Post", content: "This is my first post." },
    { id: 2, title: "Second Post", content: "This is my second post." },
    { id: 3, title: "Third Post", content: "This is my third post." },
  ];

  return (
    <section className="blog">
      <div className="title__container">
        <h1 className="section__title">BLOG</h1>
      </div>
      <main>
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </main>
    </section>
  );
}

export default Blog;
