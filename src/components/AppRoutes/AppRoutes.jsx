import { Routes, Route } from "react-router-dom";

import MainPage from "../../pages/MainPage/MainPage";
import SignInPage from "../../pages/SignInPage/SignInPage.jsx";
import SignUpPage from "../../pages/SignUpPage/SignUpPage.jsx";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage.jsx";
import LogOutPage from "../../pages/LogOutPage/LogOutPage.jsx";
import CreateNewCardPage from "../../pages/CreateNewCardPage/CreateNewCardPage.jsx";
import ViewAndEditCardPage from "../../pages/ViewAndEditCardPage/ViewAndEditCardPage.jsx"
import EditCardPage from "../../pages/EditCardPage/EditCardPage.jsx";
import PrivateRoute from "../PrivateRoute/PrivateRoute.jsx";

import { useState} from "react";

function AppRoutes() {
  // const [loading, setLoading] = useState(true);
  // const [isAuth, setIsAuth] = useState(false);

    const [isAuth, setIsAuth] = useState(() => {
            const userInfo = localStorage.getItem('userInfo');
        return !!userInfo;
      });
  //const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, []);

  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path={"/"} element={<MainPage />}>
          <Route path={"/exit"} element={<LogOutPage />} />
          <Route path={"/card/add"} element={<CreateNewCardPage />} /> 
          <Route path={"/card/:id"} element={<ViewAndEditCardPage />}>
              <Route path={"/card/:id/edit"} element={<EditCardPage />} />
          </Route>
        </Route>
      </Route>

      <Route path={"/register"} element={<SignUpPage setIsAuth={setIsAuth}/>} />
      <Route path="/login" element={<SignInPage setIsAuth={setIsAuth} />} />

      <Route path={"/*"} element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
