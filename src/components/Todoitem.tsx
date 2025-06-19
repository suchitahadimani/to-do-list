import { Buttons } from "./Buttons";

export function Todoitem(){
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
        <div style = {{
              backgroundColor: '#EFEFEF',
              height: '120px',
              width: ' 1460px',
              display: 'flex', 
               justifyContent: 'space-between',
               borderRadius: '10px',
            }}>
            
            <h4 style = {{display: 'flex', alignItems: 'center', paddingLeft: '20px'}}> Do the dishes </h4>
            
            <div style = {{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: '20px' }}>
                <Buttons/>
            </div>
            
        </div>
    );
}