import { Todoitem } from "./Todoitem";
import { useTodoStore } from "../store/store";
import { useMemo, useState } from "react";
import '../App.css';

export function TotdoList() {
  const {todos, finishedtodo, newtodo}  = useTodoStore();
  const [state, setState] = useState("All");
  
  
  const filtered = useMemo(() => {
    if (state === "Completed") return finishedtodo;
    if (state === "New") return newtodo;
    return todos;
  }, [state, todos, finishedtodo, newtodo]);
  

  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        paddingTop: "40px",
      }}
    >
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
      <button className="todo-button" onClick={() => setState("All")}>All</button>
      <button className="todo-button" onClick={() => setState("Completed")}>Completed</button>
      <button className="todo-button" onClick={() => setState("New")}>New</button>
    </div>

      {filtered.map((item) => (
        <Todoitem key={item.id} task={item.todo} id={item.id} complete={item.completed} />
      ))}
    </div>
  );
}
