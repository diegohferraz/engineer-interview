import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import styles from "./TaskItem.module.css";

type TaskItemProps = {
  title: string;
  isPrevDisabled?: boolean;
  isNextDisabled?: boolean;
  onMoveNext: () => void;
  onMovePrev: () => void;
};

const TaskItem = ({
  title,
  isPrevDisabled,
  isNextDisabled,
  onMoveNext,
  onMovePrev,
}: TaskItemProps) => (
  <div className={styles.item}>
    <button
      aria-label="Move to previous column"
      className={`${styles.btn} ${styles.prev}`}
      disabled={isPrevDisabled}
      onClick={onMovePrev}
    >
      <FiArrowLeft color="#fff" />
    </button>
    <p>{title}</p>
    <button
      aria-label="Move to next column"
      className={`${styles.btn} ${styles.next}`}
      disabled={isNextDisabled}
      onClick={onMoveNext}
    >
      <FiArrowRight color="#fff" />
    </button>
  </div>
);

export default TaskItem;
