import { Buttons } from "../components/Buttons";

function Details() {
  return (
    <div style={{ 
      backgroundColor: '#F9F9F9',
      display: 'flex', 
      justifyContent: 'center', 
      padding: '40px 40px', 
      flexDirection: 'column',
    }}>
      <div style={{
        backgroundColor: "#E1E7EB",
        width: '400px',
        padding: '40px',
        borderRadius: '10px',
        display: 'flex',
        
        alignItems: 'flex-start',
      }}>
        <h3 style={{ marginBottom: '20px' }}>Task</h3>
     </div>
        <div style={{ display: 'flex', gap: '10px',marginTop:'20px' }}>
          <Buttons />
        </div>
     
    </div>
  );
}

export default Details;
