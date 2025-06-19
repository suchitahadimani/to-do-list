import { Todoitem } from "./Todoitem";
import { getAllToDos } from "../apis/todo";
import { useEffect, useState } from "react";

export function TotdoList() {

    const [todo, setTodo] = useState<{id: number; todo: string; completed: boolean; userId: number; }[]>([]);

    useEffect(() => {
        const defaultLoad = async () => {
            try{
                const response = await getAllToDos();
                setTodo(response.todos);
            }
            catch(error){
                console.log(error)
            }
        }

        defaultLoad();
    },[]);
    



    return (
        <div style={{
        width: "100vw",            
        display: "flex",             
        flexDirection: "column",     
        alignItems: "center",        
        gap: "20px",                 
        paddingTop: "40px",          
      }}>
        {todo.map((item) => (
            <Todoitem task = {item.todo}/>
        ))}

        

        </div>
        
    );
}