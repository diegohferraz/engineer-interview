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

    const trimmedTitle = taskTitle.trim();
    if (trimmedTitle.length === 0) {
      setTaskTitle("");
      return;
    }

    onAddNewTask(taskTitle);
    setTaskTitle("");
  };

  return (
    <form className={styles.wrapper} onSubmit={handleFormSubmit}>
      <label htmlFor="titleIpt" className={styles.heading}>
        Add a new task to the list:
      </label>
      <input
        placeholder="Task title"
        id="titleIpt"
        className={styles.input}
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <button
        aria-label="Add new task to todo list"
        className={styles.btn}
        disabled={taskTitle.length === 0}
      >
        <FiPlus color="#fff" size={20} />
      </button>
    </form>
  );
};

export default NewTaskForm;
