import { Link } from "react-router";
import { useDelete } from "../hooks/useTodo";

export default function TodoItem({ id, title, content }) {
  const deleteTodo = useDelete();
  return (
    <li className="flex items-center justify-between border rounded-lg p-4">
      <label htmlFor="">
        <h2 className="text-lg font-bold">{title}</h2>
        <p>{content}</p>
      </label>
      <nav className="flex gap-2">
        <Link
          to={`/notes/${id}/edit`}
          className="border rounded-lg px-4 py-2.5"
        >
          ✏️
        </Link>
        <button
          disabled={deleteTodo.isPending}
          onClick={() => deleteTodo.mutate(id)}
          className="border rounded-lg px-4 py-2.5"
        >
          🗑️
        </button>
      </nav>
    </li>
  );
}
