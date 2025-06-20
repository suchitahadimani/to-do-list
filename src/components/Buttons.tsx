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





  const buttonStyle: React.CSSProperties = {
    backgroundColor: complete ? "#D9D9D9" : '#E1E7EB',
    width: '100px',
    height: '60px',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    marginLeft: '10px',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <>
      <button style={buttonStyle} onClick={() => updateStatus(id, !complete)}>{complete ? "Complete" : "New"}</button>
      <button style={buttonStyle} onClick={() => navigate(`/todo/${id}`)}>View</button>
      <button style={buttonStyle} onClick={onEditClick}>Edit</button>
      <button style={buttonStyle} onClick={() => deletebyID(id)}>Delete</button>
    </>
  );
}
