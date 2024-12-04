import styles from "./TodoList.module.css";

import TaskItem from "../TaskItem";

import { Task } from "../../types";

type ToDoListProps = {
  title: string;
  tasks: Task[];
  onMoveNext: (task: Task) => void;
  onMovePrev: (task: Task) => void;
};

const ToDoList = ({ title, tasks, onMoveNext, onMovePrev }: ToDoListProps) => (
  <div className={styles.column}>
    <h2 className={styles.title}>{title}</h2>
    {tasks.map((task) => (
      <TaskItem
        key={task.id}
        title={task.title}
        isPrevDisabled={task.status === "todo"}
        isNextDisabled={task.status === "done"}
        onMoveNext={() => onMoveNext(task)}
        onMovePrev={() => onMovePrev(task)}
      />
    ))}
  </div>
);

export default ToDoList;
