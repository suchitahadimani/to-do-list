import { useNavigate, useParams } from "react-router-dom";
import { useTodoStore } from "../store/store";

function Details() {
  const navigate = useNavigate(); 
  const id = (useParams());
  const todo = useTodoStore((status)=> status.todos.find((t) => t.id == Number(id.id)));

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

  return (
    <div style={{ backgroundColor: '#F9F9F9', width: '100vw', padding: '20px', boxSizing: 'border-box', minHeight: '100vh', display:'flex', alignItems:'center', justifyContent: 'center'}}>
    
      <div style={{ 
        backgroundColor: '#EFEFEF',
        display: 'flex', 
        justifyContent: 'center', 
        padding: '40px', 
        flexDirection: 'column',
      }}>
          <div style={{
            backgroundColor: "#E1E7EB",
            width: '400px',
            padding: '40px',
            borderRadius: '10px',
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '20px' 
          }}>
            <h3 style={{ margin: 0}}>{todo ? todo.todo: "task"}</h3>
          </div>
          
          <div style={{ display: 'flex', marginTop:'20px', justifyContent: 'center',}}>
            <button style = {buttonStyle} onClick={() => navigate(`/`)}>
              Go Back
            </button>
          </div>
      
      </div>
    </div>
    
  );
}

export default Details;
