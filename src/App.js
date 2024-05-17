import './App.css';
import { useState } from 'react';

function App() {
  const [task,setTask]=useState('');
  const [todos,setTodos]=useState([])
  const changeHandler=e=>{
    setTask(e.target.value)
  }
  const submitHandler=e=>{
    e.preventDefault();
    const newTodos = [...todos,task]
    setTodos(newTodos);
    setTask("")
  }
  const deleteHandler=(indexValue)=>{
    const newTodos=todos.filter((todo,index)=>index !== indexValue);
    setTodos(newTodos)
  }
  return (
    <>
    <center>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">TODO LIST APPLICATION</h3>
          <form onSubmit={submitHandler}>
            <input type="text" value={task} onChange={changeHandler}  />
            <input type="submit" name='Add' value="Add" />
          </form>
          <div>
            {
              todos.map((todo,index)=>
              <div>
                <h5 key={index}>{todo} &nbsp; <button onClick={()=>deleteHandler(index)}>❌</button></h5>
              </div>
              )
            }
          </div>
        </div>
      </div>
    </center>
    </>
  );
}

export default App;
