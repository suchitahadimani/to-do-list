import { useState } from "react";
import { addToDo } from "../apis/todo";

export function SearchBar() {
  const [newitem, setNewItem] = useState("");
  const [loading, setLoading] = useState(false);

  const submitItem = async () => {
    try{
      setLoading(true);
      const result = await addToDo(newitem);
      console.log(result);
      setNewItem("");
      setLoading(false);
    }
    catch(error){
      console.log(error);
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        backgroundColor: '#EFEFEF',
        height: '60px',
        width: '80vw',
        display: 'flex',
        borderRadius: '10px',
        justifyContent: 'space-between',
        alignItems: 'center', 
          
      }}
    >
     <input 
      type="text" 
      placeholder="Add Item"
      value = {newitem}
      onChange = {(e) => setNewItem(e.target.value)}
      onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {if (e.key === 'Enter') {submitItem();}}}
      style={{
        fontSize: '18px',
        paddingLeft: '20px',
        border: 'none',
        outline: 'none',
        backgroundColor: 'transparent',
        flex: 1
      }} 
    />


      <button
        style={{

          backgroundColor: '#D9D9D9',
          border: 'none',
          height: '100%',               
          width: '150px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px',
          cursor: 'pointer',
          marginLeft: 'auto',          
          borderTopRightRadius: '10px',
          borderBottomRightRadius: '10px',
        }}
        onClick = {() => submitItem()}
        disabled = {loading || newitem == ""}
      >
        {loading ? "Loading": "Enter"}
      </button>
    </div>
  );
}
