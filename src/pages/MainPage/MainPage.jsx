import Header from "../../components/Header/Header.jsx";
import Main from "../../components/Main/Main.jsx";

import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { fetchTasks } from "../../services/api";
// import PopNewCard from '../../components/popups/PopNewCard/PopNewCard.jsx';

const MainPage = () => {

  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");
  const location = useLocation();

  const navigate = useNavigate();

  const getTasks = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const token = userInfo?.token;
    
    if (!token) {
      navigate('/login');
      return;
    }

      const data = await fetchTasks({ token });
      
      if (data) {
        setTasks(data);
      }
    } catch (err) {
      console.error("Ошибка при загрузке:", err);
      setError("Ошибка загрузки. Обновите страницу или попробуйте позже.");
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  useEffect(() => {
      getTasks();
  }, [getTasks]);

  useEffect(() => {
  if (location.pathname === '/') {
    getTasks();
  }
}, [location.pathname, getTasks]);

  return (
    <>
      
      <Header />
      <Main tasks={tasks} error={error} loading={loading} />
      <Outlet />
    </>
  );
};

export default MainPage;
