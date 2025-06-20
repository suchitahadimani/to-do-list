import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { useEffect } from 'react';
import { useTodoStore } from './store/store';
import { getAllToDos } from './routes/api';

const Main = lazy(() => import('./pages/Main'));
const Details = lazy(() => import('./pages/Details'));

function App() {
    const setTodos = useTodoStore((state)=>state.setTodos)

    useEffect(() => {
    const loadTodos = async () => {
      try {
        const response = await getAllToDos();
        setTodos(response.todos);
      } catch (error) {
        console.log(error);
      }
    };

    loadTodos();
  }, []);

  return (
    
    <Router>
      <Suspense fallback = {<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/todo/:id" element={<Details />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
