import Header from "../../components/Header/Header.jsx";
import Main from "../../components/Main/Main.jsx";
import { Outlet } from "react-router-dom";
// import PopNewCard from '../../components/popups/PopNewCard/PopNewCard.jsx';

const MainPage = ({ loading }) => {
  return (
    <>
      
      <Header />
      <Main loading={loading} />
      <Outlet />
    </>
  );
};

export default MainPage;
