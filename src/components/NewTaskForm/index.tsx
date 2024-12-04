import { FiPlus } from "react-icons/fi";

import styles from "./NewTaskForm.module.css";

const NewTaskForm = () => {
  return (
    <form className={styles.wrapper}>
      <h3 className={styles.heading}>Add a new task to the list:</h3>
      <input placeholder="Task title" className={styles.input} />
      <button className={styles.btn}>
        <FiPlus color="#fff" size={20} />
      </button>
    </form>
  );
};

export default NewTaskForm;
