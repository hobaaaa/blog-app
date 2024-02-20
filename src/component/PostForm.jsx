import React from "react";

const PostForm = ({ onAddPost }) => {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPost({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <label htmlFor="title">Başlık:</label>
      <div>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <br />

        <label htmlFor="content">İçerik:</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        ></textarea>
      </div>
      <button type="submit">Gönder</button>
    </form>
  );
};

export default PostForm;
