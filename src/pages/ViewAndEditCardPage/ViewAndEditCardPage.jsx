import PopBrowse from '../../components/popups/PopBrowse/PopBrowse';
import { SOverlay } from '../LogOutPage/LogOutPage.styled';
import { Outlet } from 'react-router-dom';
import { useCallback, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deleteTask,viewTask  } from "../../services/api";

import { useContext } from "react";
import { TaskContext } from "../../context/ContextAPI.js";

const ViewAndEditCardPage = () => {
  const [loading, setLoading] = useState(false);
  const [task, setTask] = useState({});
  const [error, setError] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();
  const { editTask, removeTask } = useContext(TaskContext);

  const getTask = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const userInfo = JSON.parse(localStorage.getItem('userInfo'));
      const token = userInfo?.token;

      // console.log("token = ",token);

      const data = await viewTask({ token, _id: id });

      if (data) {
        setTask(data.task);
      }
    } catch (err) {
      console.error("Ошибка при загрузке:", err);

      if (err.message.includes("404")) {
        navigate("/");
        return;
      }
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [id,navigate]);

  useEffect(() => {
     const timer = setTimeout(() => {
      getTask();
    }, 100);
    
    return () => clearTimeout(timer);
  }, [getTask]);

  const handleDelete = async () => {
    try {
      setLoading(true);

      // const userInfo = JSON.parse(localStorage.getItem('userInfo'));
      // const token = userInfo?.token;
      // await deleteTask({ token, _id: id });

      await removeTask(id);
      navigate("/");
    } catch (err) {
      console.error("Ошибка при удалении:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveTask = async (updatedData) => {
    try {
      setLoading(true);
      await editTask(id, updatedData);
      navigate("/", { replace: true });
    } catch (err) {
      console.error("Ошибка при сохранении:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading && !task) {
    return (
      <SOverlay>
        <div>Загрузка...</div>
      </SOverlay>
    );
  }

  if (error && !task) {
    return (
      <SOverlay>
        <div>Ошибка: {error}</div>
        <button onClick={() => navigate("/")}>На главную</button>
      </SOverlay>
    );
  }

  if (!task) {
    return null;
  }

  return (
    <SOverlay>
      <PopBrowse
        task={task}
        loading={loading}
        onDelete={handleDelete}
        onSave={handleSaveTask}
      />
      <Outlet />
    </SOverlay>
  )
}

export default ViewAndEditCardPage