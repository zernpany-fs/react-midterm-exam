import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useCreate } from "../hooks/useTodo";

export default function TodoForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const create = useCreate();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") return;
    if (content.trim() === "") return;
    create.mutate({ title, content });
    navigate("/notes");
  };
  return (
    <form action="" onSubmit={handleSubmit} className="flex flex-col p-6">
      <h1>Note content</h1>
      <p>Use a clear title and add the detail you want to keep.</p>
      <div>
        <span>title (หัวข้อ) *</span>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="border"
        />
      </div>
      <div>
        <span>content (เนื้อหา) *</span>
        <input
          type="text"
          onChange={(e) => setContent(e.target.value)}
          value={content}
          className="border"
        />
      </div>
      <div className="flex justify-between p-6">
        <Link to="/notes">Back</Link>
        <button type="submit">Create Note</button>
      </div>
    </form>
  );
}
