import { Buttons } from "./Buttons";
import { useState } from "react";
import { useTodoStore } from "../store/store";
import { updateToDo } from '../routes/api';

interface TodoitemProps {
  task: string;
  id: number;
  complete: boolean;
}

export function Todoitem( {task, id, complete}:TodoitemProps ){

    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(task);
    const {updateTask} = useTodoStore();

    const updateTasks= async() => {
        updateTask(id, editedTask);
        try{
            const resp = await updateToDo(id, undefined, editedTask);
            setIsEditing(false);
            console.log(resp);
        }catch(error){
            console.error(error);
        }
    }

    return (
        <div style = {{
              backgroundColor: '#EFEFEF',
              height: '120px',
              width: ' 1460px',
              display: 'flex', 
               justifyContent: 'space-between',
               borderRadius: '10px',
            }}>
            
                {isEditing ? (
                    <input
                        value={editedTask}
                        autoFocus
                        onChange={(e) => setEditedTask(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                updateTasks();
                            }}}
                        style={{
                            fontSize: '18px',
                            padding: '10px',
                            borderRadius: '5px',
                            width: '100%',
                            }}
                    />
                    ) : (
                    <h4 style={{ margin: 0 }}>{task}</h4>
                )}
            
            <div style = {{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: '20px' }}>
                <Buttons complete={complete} id={id} onEditClick={() => setIsEditing(!isEditing)}/>
            </div>
            
        </div>
    );
}