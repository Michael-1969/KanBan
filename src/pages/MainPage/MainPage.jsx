import Header from "../../components/Header/Header.jsx";
import Main from "../../components/Main/Main.jsx";

//import { useContext } from "react";
//import { TaskContext } from "../../context/ContextAPI.js";

import { Outlet} from "react-router-dom";

const MainPage = () => {

  return (
    <>
      
      <Header />
      {/* <Main tasks={tasks} error={error} loading={loading} /> */}
      <Main />
      <Outlet />
    </>
  );
};

export default MainPage;
