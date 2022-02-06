import React from 'react';
import { Task } from '../model';
import { MdDelete, MdDone, MdEdit } from 'react-icons/md';
import './styles.css';

interface Props {
    task:Task;
    taskList: Task[];
    setTaskList: React.Dispatch<React.SetStateAction<Task[]>>
};

const SingleTask = ({ task, taskList, setTaskList }: Props) => {
  return <form className='single-task'>
      <span className="single-task-text">{task.task}</span>
      <div>
          <span className='icon'><MdEdit /></span>
          <span className='icon'><MdDelete /></span>
          <span className='icon'><MdDone /></span>
      </div>
  </form>;
};

export default SingleTask;
