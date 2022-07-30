import { useState,useEffect } from 'react';
import './App.css';
import Todos from './components/Todos';

function App() {

const [todo,setTodo] =useState("")

const [allTodos,setallTodos] =useState(JSON.parse(localStorage.getItem("Tasks")))

// console.log(todo);
//? Add Button
const handleAddTodo=()=>{
  if(todo !==""){
   setTodo({...allTodos, todo})
  };
  setTodo("")  
}



useEffect(() => {
  localStorage.setItem("Tasks",JSON.stringify(allTodos))
}, [allTodos])
















  return (
    <div className="container fluid">
      <div className='row'>
        <div className='col'>
          <h2 className='text-center mb-4'>My Todos</h2>
        <div className='d-flex gap-4 mb-4'>
          <input type="text"
          
          name='add-todo'
          className='form-control shadow-none text-capitalize'
          placeholder='Enter new Task' 
          value={todo}
          onChange={(e)=>setTodo(e.target.value)}
          />
          <button 
          className='btn btn-warning px-3 fw-bold shadow-none'
          onClick={handleAddTodo}
          >Add</button>
          
          </div>
          <ul className='list-group'>
            <Todos/>
          </ul>
        </div>
      </div>
      
    </div>
  );
}

export default App;
