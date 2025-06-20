import { Todoitem } from "./Todoitem";
import { useTodoStore } from "../store/store";

export function TotdoList() {
  const {todos}  = useTodoStore();

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
      {todos.map((item) => (
        <Todoitem key={item.id} task={item.todo} id={item.id} complete={item.completed} />
      ))}
    </div>
  );
}
