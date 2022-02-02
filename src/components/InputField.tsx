import './styles.css';

const InputField: React.FC = () => {
  return <form className="input">
      <input type="input" placeholder="Enter a new task" className="inputBox" />
        <button type="submit" className="submitButton">Add</button>
  </form>;
};

export default InputField;
