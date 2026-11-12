import { SOverlay } from "../../pages/LogOutPage/LogOutPage.styled";
import PopNewCard from '../../components/popups/PopNewCard/PopNewCard';

import { useState, useContext } from "react";
import { TaskContext } from "../../context/ContextAPI.js";

// import { postTask } from "../../services/api";

import { useNavigate } from "react-router-dom";

const CreateNewCardPage = () => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");   
  const navigate = useNavigate();
  const { addTask } = useContext(TaskContext);

  const handleCreateTask  = async (newTaskData) => {
    try {
      setLoading(true);
      setError("");

      // const userInfo = JSON.parse(localStorage.getItem('userInfo'));
      // const token = userInfo?.token;

      // await postTask({ token, newTask: newTaskData });
      
      await addTask(newTaskData);
      navigate("/", { replace: true });
     
    } catch (err) {
      console.error("Ошибка при создании:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <SOverlay>
      <PopNewCard 
        error={error}
        loading={loading} 
        onCreate={handleCreateTask}/>
    </SOverlay>
  )
}

export default CreateNewCardPage