import React from "react";
import PostCard from "../component/PostCard";
import PostForm from "../component/PostForm";
import posts from "../data/posts";

const Home = () => {
  const [allPosts, setAllPosts] = React.useState(posts);

  const handleAddPost = (newPost) => {
    setAllPosts([...allPosts, { id: allPosts.length + 1, ...newPost }]);
  };
  return (
    <div>
      <h1>Blog</h1>
      <PostForm onAddPost={handleAddPost} />
      {allPosts.map((post) => (
        <PostCard key={post.id} title={post.title} content={post.content} />
      ))}
    </div>
  );
};
export default Home;
