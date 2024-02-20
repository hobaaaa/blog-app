import React from "react";
import { useParams } from "react-router-dom";
import posts from "../data/posts";

const Post = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id, 10));
  if (!post) return <div>Post not found</div>;
  return (
    <>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </>
  );
};
export default Post;
