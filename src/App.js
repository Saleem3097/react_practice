import { useState } from 'react';
import './App.css';

function App() {
  const [newTask, setTask] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const getData = (event) => {
    setTask(event.target.value);
  };

  const addTaskList = () => {
    const gotList = {
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
      content: newTask,
      completed: false,
      modification: false
    };

    setToDoList([...toDoList, gotList]);
    setTask("");
  };

  const deleteTask = (id) => {
    setToDoList(toDoList.filter((task) => task.id !== id));
  };

  const updateTask = (id) => {
    setToDoList(toDoList.map((task) => {
      if (task.id === id) {
        return { ...task, modification: true };
      } else {
        return task;
      }
    }));
  };

  const handleChange = (event, id) => {
    const updatedContent = event.target.value;
    setToDoList(toDoList.map((task) => {
      if (task.id === id) {
        return { ...task, content: updatedContent };
      } else {
        return task;
      }
    }));
  };

  const handleKeyDown = (event, id) => {
    if (event.key === 'Enter') {
      setToDoList(toDoList.map((task) => {
        if (task.id === id) {
          return { ...task, modification: false };
        } else {
          return task;
        }
      }));
    }
  };

  return (
    <>
    <h1 className='App-heading'>TODOLIST WEB-APP</h1>
    <div className="App">
      <div className='form'>
        <input type='text' value={newTask} onChange={getData} />
        <button onClick={addTaskList}>Add Task</button>
      </div>
      <div className='list'>
        {toDoList.map((task) => (
          <div key={task.id} className='task-item'>
            {task.modification ? (
              <input 
                type="text" 
                value={task.content}
                onChange={(event) => handleChange(event, task.id)}
                onKeyDown={(event) => handleKeyDown(event, task.id)}
                className='task-input'
              />
            ) : (
              <>
                <h1 className='task-content'>{task.content}</h1>
                <button className="delete" onClick={() => deleteTask(task.id)}>X</button>
                <button className="update" onClick={() => updateTask(task.id)}>Update</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default App;
