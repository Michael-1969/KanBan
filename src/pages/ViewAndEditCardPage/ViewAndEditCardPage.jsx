import PopBrowse from '../../components/popups/PopBrowse/PopBrowse';
import { SOverlay } from '../LogOutPage/LogOutPage.styled';
import { Outlet } from 'react-router-dom';
import { useCallback, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deleteTask,viewTask  } from "../../services/api";

const ViewAndEditCardPage = () => {
  const [loading, setLoading] = useState(false);
  const [task, setTask] = useState({});
  const [error, setError] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  const getTask = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const userInfo = JSON.parse(localStorage.getItem('userInfo'));
      const token = userInfo?.token;

      console.log("token = ",token);

      const data = await viewTask({ token, _id: id });

      if (data) {
        setTask(data.task);
      }
    } catch (err) {
      console.error("Ошибка при загрузке:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getTask();
  }, [getTask]);

  const handleDelete = async () => {
    try {
      setLoading(true);

      const userInfo = JSON.parse(localStorage.getItem('userInfo'));
      const token = userInfo?.token;

      await deleteTask({ token, _id: id });
      navigate("/");
    } catch (err) {
      console.error("Ошибка при удалении:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SOverlay>
      <PopBrowse
        task={task}
        error={error}
        loading={loading}
        onDelete={handleDelete}
      />
      <Outlet />
    </SOverlay>
  )
}

export default ViewAndEditCardPage