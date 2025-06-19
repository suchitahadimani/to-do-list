import React from 'react';
import { Progress } from '../components/Progress';
import { SearchBar } from '../components/SearchBar';
import { TotdoList } from '../components/TodoList';

function Main() {
  return (
    <div style={{ backgroundColor: '#F9F9F9', width: '100vw', padding: '20px', boxSizing: 'border-box' }}>
      
    
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', marginBottom: '40px' }}>
      
        <div/>
        <h1 style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', margin: 0 }}>
          To Do List
        </h1>
        
        <Progress />
        
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
        <SearchBar />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <TotdoList />
      </div>
    </div>
  );
}

export default Main;
