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


export async function getAllToDos(){
    const response = await fetch('https://dummyjson.com/todos')
    if (!response.ok) {
        throw new Error('Failed to retrieve to-dos');
    }

    return response.json();

}


export async function updateToDo(){
   
    const response = await fetch('https://dummyjson.com/todos/1', {
        method: 'PUT', /* or PATCH */
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            completed: false,
        })
    })
    if (!response.ok) {
            throw new Error('Failed to update to-do');
        }

    return response.json();
}

export async function deleteToDo() {
    const response = await fetch('https://dummyjson.com/todos/1', {
        method: 'DELETE',
        })
    
    if (!response.ok) {
            throw new Error('Failed to delete to-do');
        }

    return response.json();
}

