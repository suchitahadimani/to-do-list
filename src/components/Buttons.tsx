import { useNavigate } from 'react-router-dom';
import { useTodoStore } from "../store/store";
import { deleteToDo, updateToDo } from '../routes/api';

export function Buttons({ complete,id, onEditClick }: { complete: boolean; id: number, onEditClick: () => void }) {
  const navigate = useNavigate(); 
  const {removeTodo, toggleComplete} = useTodoStore();

  const deletebyID = async (id:number) => {
      removeTodo(id)
      try{
          const resp = await deleteToDo(id);
          console.log(resp);
      }catch(error){
          console.error(error);
      }
  }

  const updateStatus = async (id:number, status:boolean) => {
    toggleComplete(id)
    try{
          const resp = await updateToDo(id, status);
          console.log(resp);
      }catch(error){
          console.error(error);
      }
  }

  return (
    <>
      <button className={`todo-button ${complete ? "complete" : ""}`} onClick={() => updateStatus(id, !complete)}>{complete ? "Complete" : "New"}</button>
      <button className={`todo-button ${complete ? "complete" : ""}`} onClick={() => navigate(`/todo/${id}`)}>View</button>
      <button className={`todo-button ${complete ? "complete" : ""}`} onClick={onEditClick}>Edit</button>
      <button className={`todo-button ${complete ? "complete" : ""}`} onClick={() => deletebyID(id)}>Delete</button>
    </>
  );
}
