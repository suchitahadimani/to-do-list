export function Progress(){
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
            <h3>Total: 0</h3>
            <h3>Completed: 0</h3>
            <h3>In Progress: 0</h3>
        </div>
    );
}