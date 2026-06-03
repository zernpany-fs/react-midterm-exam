import { useTodos } from "../hooks/useTodo";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { data, isLoading, error } = useTodos();
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(data);
  return (
    <ul className="space-y-1.5">
      {" "}
      {data.data.items.map((note) => (
        <TodoItem key={note.id} {...note} />
      ))}{" "}
    </ul>
  );
}
