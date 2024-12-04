import { useState } from "react";

import { GroupedTasks, Task } from "../types";
import initialData from "../data/initialData.json";

import styles from "./App.module.css";

import Header from "../components/Header";
import ToDoList from "../components/ToDoList";
import NewTaskForm from "../components/NewTaskForm";

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialData as Task[]);

  const groupedTasks = tasks.reduce<GroupedTasks>(
    (acc, task) => {
      acc[task.status].push(task);
      return acc;
    },
    {
      todo: [],
      progress: [],
      done: [],
    }
  );

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <ToDoList title="To do" tasks={groupedTasks.todo} />
        <ToDoList title="In Progress" tasks={groupedTasks.progress} />
        <ToDoList title="Done" tasks={groupedTasks.done} />
      </main>
      <NewTaskForm />
    </div>
  );
}

export default App;
