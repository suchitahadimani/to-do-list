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


export async function getAllToDos(limit = 10, skip = 0) {
  const response = await fetch(`https://dummyjson.com/todos?limit=${limit}&skip=${skip}`);
  if (!response.ok) {
    throw new Error('Failed to retrieve to-dos');
  }
  return response.json(); 
}




export async function updateToDo(id:number, status?:boolean, todoText?:string){

      const body: Record<string, any> = {};

        if (typeof status === 'boolean') {
            body.completed = status;
        }

        if (typeof todoText === 'string') {
            body.todo = todoText;
        }
        
    const response = await fetch(`https://dummyjson.com/todos/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    })
    if (!response.ok) {
            throw new Error('Failed to update to-do');
        }

    return response.json();
}

export async function deleteToDo(id:number) {
    const response = await fetch(`https://dummyjson.com/todos/${id}`, {
        method: 'DELETE',
        })
    
    if (!response.ok) {
            throw new Error('Failed to delete to-do');
        }

    return response.json();
}

