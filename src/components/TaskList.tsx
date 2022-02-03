import React from 'react';
import './styles.css';
import { Task } from '../model';

interface Props {
    taskList: Task[];
    setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList: React.FC<Props> = ({ taskList, setTaskList }: Props) => {
  return <div className='tasks'>
      {taskList.map(task => (
          <li>{task.task}</li>
      ))}
  </div>;
};

export default TaskList;