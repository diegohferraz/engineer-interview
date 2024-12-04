import styles from "./App.module.css";

import Header from "../components/Header";
import ToDoList from "../components/ToDoList";
import NewTaskForm from "../components/NewTaskForm";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <ToDoList title="To do" />
        <ToDoList title="In Progress" />
        <ToDoList title="Done" />
      </main>
      <NewTaskForm />
    </div>
  );
}

export default App;
