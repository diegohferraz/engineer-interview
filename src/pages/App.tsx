import styles from "./App.module.css";

import Header from "../components/Header";
import ToDoList from "../components/ToDoList";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <ToDoList title="To do" />
        <ToDoList title="In Progress" />
        <ToDoList title="Done" />
      </main>
      <div>
        <h1>form</h1>
      </div>
    </div>
  );
}

export default App;
