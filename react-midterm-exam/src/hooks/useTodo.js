import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createTodo, deleteTodo, editTodo, getTodos } from "../api/todo";

export function useTodos() {
  return useQuery({
    queryKey: ["notes"],
    queryFn: getTodos,
    staleTime: Infinity,
  });
}

export function useTodoById(id) {
  return useQuery({
    queryKey: ["note", id],
    queryFn: () => getTodos(id),
  });
}

export function useCreate() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createTodo,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["notes"],
      }),
  });
}

export function useDelete() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteTodo,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["notes"],
      }),
  });
}

export function useUpdate() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: editTodo,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["notes"],
      }),
  });
}
