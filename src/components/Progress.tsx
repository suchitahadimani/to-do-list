import { useTodoStore } from "../store/store";

export function Progress(){
    const {completedCount,totalCount} = useTodoStore();
    const newCount = totalCount - completedCount;
    
    return (
        <div style = {{
            backgroundColor:"#E1E7EB",
            height: '200px',
            width: '400px',
            display: 'flex', 
            alignItems: 'flex-start',
            flexDirection: 'column',
            paddingLeft: '20px', 
            borderRadius: '10px'

        }}>
            <h3>Total: {totalCount}</h3>
            <h3>Completed: {completedCount}</h3>
            <h3>In Progress: {newCount}</h3>
        </div>
    );
}