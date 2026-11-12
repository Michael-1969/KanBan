
import { AuthContext,TaskContext } from "./ContextAPI";
import { checkList } from "../utils/checkList";

import { useContext, useState, useEffect, useCallback } from "react";
import { fetchTasks, postTask, updateTask, deleteTask } from "../services/api";



export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(checkList());

  const updateUserInfo = (userData) => {
    console.log("updateUserInfo = ",userData);
    setUser(userData);
    if (userData) {
      localStorage.setItem("userInfo", JSON.stringify(userData));
    } else {
      localStorage.removeItem("userInfo");
    }
  };

  return (
    <AuthContext.Provider value={{ user, updateUserInfo }}>
      {children}
    </AuthContext.Provider>
  );
};

//////////////////////////////////////////////////////////////////////////////////////


export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { user } = useContext(AuthContext);

  const loadTasks = useCallback(async () => {
    if (!user?.token) return;

    setLoading(true);
    try {
      const data = await fetchTasks({ token: user.token });
      setTasks(data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [user?.token]);

  const addTask = async (newTaskData) => {
    try {
      const data = await postTask({ token: user.token, newTask: newTaskData });

      if (data && Array.isArray(data)) {
        setTasks(data);
      } else if (data && data.tasks) {
        setTasks(data.tasks);
      } else if (data && data[0]) {
        setTasks((prev) => {
          const filtered = prev.filter((task) => task._id !== data[0]._id);
          return [...filtered, data[0]];
        });
      } else {
        await loadTasks();
      }

      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const editTask = async (taskId, updatedData) => {
    try {
      await updateTask({
        token: user.token,
        _id: taskId,
        updatedData,
      });

      setTasks((prev) =>
        prev.map((task) =>
          task._id === taskId ? { ...task, ...updatedData } : task
        )
      );
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const removeTask = async (taskId) => {
    try {
      await deleteTask({ token: user.token, _id: taskId });

      setTasks((prev) => prev.filter((task) => task._id !== taskId));
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loading,
        error,
        loadTasks,
        addTask,
        editTask,
        removeTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

