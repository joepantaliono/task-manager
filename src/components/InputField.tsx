import './styles.css';

interface Props {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>; // callable function type found hovering over setTask in hook declaration
  handleAdd: (e: React.FormEvent) => void; // doesn't return anything return type == void
}

const InputField = ({ task, setTask, handleAdd }: Props) => {
  return <form className="input" onSubmit={handleAdd}>
      <input 
      value={task}
      onChange={(e) => setTask(e.target.value)}
      type="input" 
      placeholder="Enter a new task" 
      className="inputBox" />
        <button type="submit" className="submitButton">Add</button>
  </form>;
};

export default InputField;
