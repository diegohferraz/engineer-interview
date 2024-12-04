import { useState } from "react";

import { GroupedTasks, Task } from "../types";
import initialData from "../data/initialData.json";

import styles from "./App.module.css";

import Header from "../components/Header";
import ToDoList from "../components/ToDoList";
import NewTaskForm from "../components/NewTaskForm";

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialData as Task[]);

  const handleAddNewTask = (title: string) => {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: title.trim(),
        status: "todo",
      },
    ]);
  };

  const handleMoveNextColumn = (task: Task) => {
    const listWithoutTask = tasks.filter((item) => item.id !== task.id);

    setTasks([
      ...listWithoutTask,
      {
        ...task,
        status: task.status === "todo" ? "progress" : "done",
      },
    ]);
  };

  const handleMovePreviousColumn = (task: Task) => {
    const listWithoutTask = tasks.filter((item) => item.id !== task.id);

    setTasks([
      ...listWithoutTask,
      {
        ...task,
        status: task.status === "done" ? "progress" : "todo",
      },
    ]);
  };

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
        <ToDoList
          title="To do"
          tasks={groupedTasks.todo}
          onMoveNext={handleMoveNextColumn}
          onMovePrev={handleMovePreviousColumn}
        />
        <ToDoList
          title="In Progress"
          tasks={groupedTasks.progress}
          onMoveNext={handleMoveNextColumn}
          onMovePrev={handleMovePreviousColumn}
        />
        <ToDoList
          title="Done"
          tasks={groupedTasks.done}
          onMoveNext={handleMoveNextColumn}
          onMovePrev={handleMovePreviousColumn}
        />
      </main>
      <NewTaskForm onAddNewTask={handleAddNewTask} />
    </div>
  );
}

export default App;
