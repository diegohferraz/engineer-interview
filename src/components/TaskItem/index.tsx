import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import styles from "./TaskItem.module.css";

type TaskItemProps = {
  title: string;
  isPrevDisabled?: boolean;
  isNextDisabled?: boolean;
};

const TaskItem = ({ title, isPrevDisabled, isNextDisabled }: TaskItemProps) => (
  <div className={styles.item}>
    <button
      className={`${styles.btn} ${styles.prev}`}
      disabled={isPrevDisabled}
    >
      <FiArrowLeft color="#fff" />
    </button>
    <p>{title}</p>
    <button
      className={`${styles.btn} ${styles.next}`}
      disabled={isNextDisabled}
    >
      <FiArrowRight color="#fff" />
    </button>
  </div>
);

export default TaskItem;
