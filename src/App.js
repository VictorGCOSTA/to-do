import React, {useState} from "react";
import Form from "./components/Form";
import './App.css';
import Edit from "./components/Edit";
import Task from "./components/Task";

function App() {
  const[todos, setTodos] = useState([])
  const[index, setIndex] = useState(0)
  
  const addTask = (t) => {
    setTodos([...todos, {id: index, task:t, completed: false, editing:false}])
    setIndex(index + 1)
  }

  const completar = id => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const edit = id => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, editing: !todo.editing} : todo ))
  }

  const editTask = (task, id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, task, editing: !todo.editing} : todo))
  }
  return (
    <div className="main">
      <h1><strong>ORC</strong>LIST</h1>
    <div className="content">
      <Form addTask={addTask}/>
      {todos.map((todo, ind) => (
        todo.editing ? (
           <Edit editTask = {editTask} task = {todo}/>
        ) : (
          <Task task={todo} key={ind} completar={completar} deleteTodo={deleteTodo} edit={edit}/>
        ) 
      ))}
      
    </div>
    </div>
    
  );
}

export default App;
