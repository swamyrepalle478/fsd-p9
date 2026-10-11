import React from "react";
import useFetch from "./useFetch";

function Posts() {
  const {
    data: posts,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/posts?_limit=5");

  return (
    <section className="section">
      <h2>2. Data Fetching using useEffect and useFetch</h2>

      {loading && <p>Loading posts...</p>}

      {error && (
        <p className="error">
          {error}. Check your internet connection and try again.
        </p>
      )}

      {posts &&
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h3>
              {post.id}. {post.title}
            </h3>
            <p>{post.body}</p>
          </div>
        ))}
    </section>
  );
}

export default Posts;
