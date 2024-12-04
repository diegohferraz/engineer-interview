import { useState } from "react";
import { FiPlus } from "react-icons/fi";

import styles from "./NewTaskForm.module.css";

type NewTaskFormProps = {
  onAddNewTask: (title: string) => void;
};

const NewTaskForm = ({ onAddNewTask }: NewTaskFormProps) => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    onAddNewTask(taskTitle);
    setTaskTitle("");
  };

  return (
    <form className={styles.wrapper} onSubmit={handleFormSubmit}>
      <h3 className={styles.heading}>Add a new task to the list:</h3>
      <input
        placeholder="Task title"
        className={styles.input}
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <button className={styles.btn} disabled={taskTitle.length === 0}>
        <FiPlus color="#fff" size={20} />
      </button>
    </form>
  );
};

export default NewTaskForm;
