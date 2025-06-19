import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Details from './pages/Details';
import Main from './pages/Main';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/todo/:id" element={<Details/>} />
      </Routes>
    </Router>
  );
}

export default App;
