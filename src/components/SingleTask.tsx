import React from 'react';
import { Task } from '../model';
import { MdDelete, MdDone, MdEdit } from 'react-icons/md';
import './styles.css';
import TaskList from './TaskList';

interface Props {
    task:Task;
    taskList: Task[];
    setTaskList: React.Dispatch<React.SetStateAction<Task[]>>
};

const SingleTask = ({ task, taskList, setTaskList }: Props) => {
    const handleComplete = (id: number) => {
        setTaskList(taskList.map(task=> task.id===id?{...task, completed:!task.completed}:task))
    }

    const handleDelete = (id: number) => {
        setTaskList(taskList.filter((task)=> task.id !== id))
    }

  return <form className='single-task'>
      {task.completed? (
          <s className="single-task-text">{task.task}</s>
      ):(
        <span className="single-task-text">{task.task}</span>
      )}
      
      <div>
          <span className='icon'><MdEdit /></span>
          <span className='icon' onClick={()=>handleDelete(task.id)}><MdDelete /></span>
          <span className='icon' onClick={()=>handleComplete(task.id)}><MdDone /></span>
      </div>
  </form>;
};

export default SingleTask;
