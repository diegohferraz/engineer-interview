export type TaskStatus = "todo" | "progress" | "done";

export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
}

export interface GroupedTasks {
  todo: Task[];
  progress: Task[];
  done: Task[];
}
