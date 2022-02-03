import React from 'react';
import { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Task } from './model';
import TaskList from './components/TaskList';

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [taskList, setTaskList] = useState<Task[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault(); // preventDefault handles page refresh
    if (task) {
      setTaskList([...taskList, { id: Date.now(), task, completed: false }]);
      setTask("");
    }
  }

  console.log(taskList)

  return (
    <div className="App">
      <span className='heading'>Task Manager</span>
      <InputField task={task} setTask={setTask} handleAdd={handleAdd} />
      <TaskList taskList={taskList} setTaskList={setTaskList} />   
    </div>
  );
}

export default App;
