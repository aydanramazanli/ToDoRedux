import React from 'react';
import './App.css';
import  DisplayTodos from './companents/DisplayTodos'
import Todos from './companents/Todos'




function App() {

  return (
    <div className="App">
<DisplayTodos/>
<Todos/>
    </div>
  );
}

export default App;
