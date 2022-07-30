import { useState,useEffect } from 'react';
import './App.css';
import Todos from './components/Todos';

function App() {

const [todo,setTodo] =useState("")

const [allTodos,setallTodos] =useState(JSON.parse(localStorage.getItem("Tasks")) || [])

console.log(allTodos);
//? Add Button
const handleAddTodo=()=>{
  if(todo !==""){
   setallTodos([...allTodos,todo])
  };
  setTodo("")  
}


//? DELETETE
const deleteTodo=(id)=>{
    const filteredItems=allTodos.filter((todoItem,index)=>{
      return index!==id
    })
  
   setallTodos(filteredItems)
}

//? EDİTED TODO
const editedTodo=(id)=>{
  const filteredItem=allTodos.filter((todoItem,index)=>{
    return index===id
  })

 setTodo(filteredItem)
 deleteTodo(id)
 
}



useEffect(() => {
  localStorage.setItem("Tasks",JSON.stringify(allTodos))
}, [allTodos])






  return (
    <div className="container fluid">
      <div className='row'>
        <div className='col-sm-6 mx-auto bg-info rounded-4 p-3 mt-5'>
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
            {allTodos.map((todoItem,index)=>{
              return(
                <Todos key={index}
                id={index}
                todoItem={todoItem}
                deleteTodo={deleteTodo}
                editedTodo={editedTodo}
                />
              )
            })}
            
           
          </ul>
        </div>
      </div>
      
    </div>
  );
}

export default App;
