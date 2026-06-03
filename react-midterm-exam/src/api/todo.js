import { api } from "./client";

export async function getTodos() {
  const { data } = await api.get(`/notes`);
  return data;
}

export async function getTodo(id) {
  const { data } = await api.get(`/notes/${id}`);
  return data;
}

export async function createTodo(newTodo) {
  const { data } = await api.post(`/notes`, newTodo);
  return data;
}

export async function deleteTodo(id) {
  const { data } = await api.delete(`/notes/${id}`);
  return data;
}

export async function editTodo({
  data: {
    items: { id },
  },
  title,
  content,
}) {
  const { data } = await api.patch(`/notes/${id}`, {
    title,
    content,
  });
  return data;
}

export async function updateTodo({ id, ...body }) {
  const { data } = await api.patch(`/notes/${id}`, body);
  return data;
}
