import React from 'react';
import './styles.css';
import { Task } from '../model';
import SingleTask from './SingleTask';

interface Props {
    taskList: Task[];
    setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList: React.FC<Props> = ({ taskList, setTaskList }: Props) => {
  return <div className='tasks'>
      {taskList.map((task) => (
          <SingleTask 
            task={task} 
            key={task.id}
            taskList={taskList}
            setTaskList={setTaskList}
          />
      ))}
  </div>;
};

export default TaskList;