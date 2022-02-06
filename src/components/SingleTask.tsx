import React, { useState, useRef, useEffect } from 'react';
import { Task } from '../model';
import { MdDelete, MdDone, MdEdit } from 'react-icons/md';
import './styles.css';

interface Props {
    task:Task;
    taskList: Task[];
    setTaskList: React.Dispatch<React.SetStateAction<Task[]>>
};

const SingleTask = ({ task, taskList, setTaskList }: Props) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTask, setEditTask] = useState<string>(task.task);


    const handleComplete = (id: number) => {
        setTaskList(taskList.map(task=> task.id===id?{...task, completed:!task.completed}:task))
    };

    const handleDelete = (id: number) => {
        setTaskList(taskList.filter((task)=> task.id !== id))
    };
    
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
      inputRef.current?.focus();
    }, [edit]);

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTaskList(taskList.map((task)=>(task.id===id? { ...task, task: editTask }: task)));
        setEdit(false);
      };

  return <form className='single-task' onSubmit={(e)=>handleEdit(e, task.id)}>
      {
          edit? (
              <input 
              ref={inputRef}
              value={editTask}
              onChange={(e) => setEditTask(e.target.value)}
              className="single-task-text"
              />
          ):(
            task.completed? (
                <s className="single-task-text">{task.task}</s>
            ):(
              <span className="single-task-text">{task.task}</span>
            )
          )
      }
      
      <div>
          <span className='icon'
          onClick={() => {
              if (!edit && !task.completed){
                setEdit(!edit);
              }}
          }
            >
                <MdEdit />
                </span>
          <span className='icon' onClick={()=>handleDelete(task.id)}><MdDelete /></span>
          <span className='icon' onClick={()=>handleComplete(task.id)}><MdDone /></span>
      </div>
  </form>;
};

export default SingleTask;
