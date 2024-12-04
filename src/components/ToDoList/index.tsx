import styles from "./TodoList.module.css";

import TaskItem from "../TaskItem";

type ToDoListProps = {
  title: string;
};

const ToDoList = ({ title }: ToDoListProps) => (
  <div className={styles.column}>
    <h2 className={styles.title}>{title}</h2>
    <TaskItem title="Start the challenge" />
    <TaskItem title="Do the challenge" isPrevDisabled />
    <TaskItem title="Finish the challenge" isNextDisabled />
  </div>
);

export default ToDoList;
