import './App.css';
import Todos from './components/Todos';

function App() {
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
          // value=""
          />
          <button className='btn btn-warning px-3 fw-bold shadow-none'>Add</button>
          
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
