import { createContext } from "react";

export const AuthContext = createContext(null);
export const TaskContext = createContext({
  tasks: [],
  loading: false,
  error: "",
  loadTasks: () => {},
  addTask: () => {},
  editTask: () => {},
  removeTask: () => {},
});