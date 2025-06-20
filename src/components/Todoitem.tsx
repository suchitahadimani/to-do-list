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
    const buttonStyle: React.CSSProperties = {
        backgroundColor: '#E1E7EB',
        width: '100px',
        height: '60px',
        padding: '20px',
        borderRadius: '10px',
        textAlign: 'center',
        marginLeft: '10px',
        border: 'none',
        cursor: 'pointer',
    };

    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(task);
    const {updateTask} = useTodoStore();

    const updateTasks= async (task:string) => {
        updateTask(id, task);
        try{
            const resp = await updateToDo(id, undefined, task);
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
                        if (e.key === 'Enter') updateTasks(editedTask);
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