import './App.css';

function App() {
  return (
    <div className="container fluid">
      <div className='row'>
        <div className='col'>
          <h2 className='text-center mb-4'>My Todos</h2>
        </div>
        <div className='d-flex gap-4 mb-4'>
          <input type="text"
          name='add-todo'
          className='form-control shadow-none text-capitalize'
          placeholder='Enter new Task' />
        </div>
      </div>
      
    </div>
  );
}

export default App;
