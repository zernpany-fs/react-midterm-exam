import { useNavigate, useParams } from "react-router";
import { useTodoById, useUpdate } from "../hooks/useTodo";
// import { editTodo } from "../api/todo";
import { useEffect, useState } from "react";

export default function EditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useTodoById(id);
  const edit = useUpdate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    edit.mutate(
      { id, title, content },
      {
        onSuccess: () => navigate("/notes"),
      },
    );
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border"
        />
      </div>
      <div>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border"
        />
        <button type="submit">Save</button>
      </div>
    </form>
  );
}
