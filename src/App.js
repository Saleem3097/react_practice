import { useState } from 'react';
import './App.css';
import Task from './Task';

function App() {
  const [todoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const handleChange = (event)=>{
    setNewTask(event.target.value);
  }
  const addTask = () =>{
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length-1].id+1,
      taskName: newTask,
      completed : false,
    }
    setToDoList([...todoList, task ]);
  }
  const deleteTask =(id)=>{
  setToDoList(todoList.filter((task)=>task.id!==id))
  }
  const onComplete = (id) => {
    setToDoList(todoList.map((task) => {
      if (task.id === id) {
        return { ...task, completed: true };
      } else {
        return task;
      }
    })
  );
  };
  

  return (
    <div className="App">'
        <div className='addTask'>
            <input onChange={handleChange}/>
            <button onClick={addTask}>Add Task</button>
        </div>
        <div className='list'>
          {todoList.map((task)=>{
          return <Task taskName={task.taskName} completed={task.completed} id={task.id} deleteTask={deleteTask} onComplete={onComplete} />
          })}
        </div>
    </div>
  );
}

export default App;
