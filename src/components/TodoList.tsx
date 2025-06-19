import { Todoitem } from "./Todoitem";

export function TotdoList() {
    return (
        <div style={{
        width: "100vw",            
        display: "flex",             
        flexDirection: "column",     
        alignItems: "center",        
        gap: "20px",                 
        paddingTop: "40px",          
      }}>
            <Todoitem/>
            <Todoitem/>
            <Todoitem/>
            <Todoitem/>
            <Todoitem/>
            <Todoitem/>
            <Todoitem/>


        </div>
        
    );
}