export function Buttons() {
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
      <button style={buttonStyle}>View</button>
      <button style={buttonStyle}>Edit</button>
      <button style={buttonStyle}>Delete</button>
    </>
  );
}
