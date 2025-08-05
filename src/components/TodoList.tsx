import { Todoitem } from "./Todoitem";
import { useTodoStore } from "../store/store";
import { useMemo, useState, useEffect, useRef } from "react";
import '../App.css';
import { getAllToDos } from "../routes/api";

export function TotdoList() {
  const {todos, finishedtodo, newtodo,appendTodos}  = useTodoStore();
  const [state, setState] = useState("All");
  const [page, setPage] = useState(0);
  const isFetchingRef = useRef(false);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 200 &&
      !isFetchingRef.current
    ) {
      isFetchingRef.current = true;
      fetchMore();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fetchMore = async () => {
    try {
      const res = await getAllToDos(10, page * 10);
      appendTodos(res.todos);
      setPage((p) => p + 1);
    } catch (e) {
      console.error(e);
    } finally {
      isFetchingRef.current = false;
    }
  };
  
  
  const filtered = useMemo(() => {
    if (state === "Completed") return finishedtodo;
    if (state === "New") return newtodo;
    return todos;
  }, [state, todos, finishedtodo, newtodo, page]);
  

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
