import { useNavigate } from 'react-router-dom';

export function Buttons() {
  const navigate = useNavigate(); 

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
    <>
      <button style={buttonStyle}>Complete</button>
      <button style={buttonStyle} onClick={() => navigate("/todo/1")}>View</button>
      <button style={buttonStyle}>Edit</button>
      <button style={buttonStyle}>Delete</button>
    </>
  );
}
