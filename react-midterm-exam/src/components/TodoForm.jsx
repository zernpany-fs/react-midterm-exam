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
    <form action="" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="border"
        />
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => setContent(e.target.value)}
          value={content}
          className="border"
        />
      </div>
      <div>
        <button type="submit">SAVE</button>
        <Link to="/notes">CANCEL</Link>
      </div>
    </form>
  );
}
