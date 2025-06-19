export async function addToDo(todoText: string) {
  const response = await fetch('https://dummyjson.com/todos/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      todo: todoText,
      completed: false,
      userId: 5,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to add todo');
  }

  return response.json();
}

