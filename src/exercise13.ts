export type TodoItem = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export async function fetchTodoSafe(todoId: number): Promise<TodoItem | null> {
  const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
  if(!data.ok){
    return null;
  }
  const ret = data.json();
  return ret;
}
