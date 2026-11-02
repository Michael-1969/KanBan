import { useState } from "react";
// import PopUpUserSet from "../popups/PopUpUserSet/PopUpUserSet.jsx";
import SContainer from "../Global/Container.styled.js";
import { Link } from "react-router-dom";

import {
  SHeader,
  SHeaderBlock,
  SHeaderLogo,
  SLogoImg,
  SLink,
  SHeaderNav,
  SHeaderBtnMain,
  SHeaderBtnSpan,
  SHeaderUserLink,
} from "../Header/Header.styled.js";

import PopUpUserSet from "../popups/PopUpUserSet/PopUpUserSet.jsx";
const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <SHeader>
      <SContainer>
        <SHeaderBlock>
          <SHeaderLogo>
            <SLink href="" target="_self">
              <SLogoImg src="images/logo.png" alt="logo" />
            </SLink>
          </SHeaderLogo>
          <SHeaderLogo hide>
            <SLink href="" target="_self">
              <SLogoImg src="images/logo_dark.png" alt="logo" />
            </SLink>
          </SHeaderLogo>

          <SHeaderNav>
            <Link to={"/card/add"}> 
              <SHeaderBtnMain id="btnMainNew">
                {/* <SHeaderBtnLink href="#popNewCard"> */}
                <SHeaderBtnSpan>Создать новую задачу</SHeaderBtnSpan>
              </SHeaderBtnMain>
            </Link>
            <SHeaderUserLink href="#user-set-target" onClick={toggleModal}>
              Ivan Ivanov
            </SHeaderUserLink>
            {showModal && <PopUpUserSet onCloseButtonClick={toggleModal} />}
          </SHeaderNav>
        </SHeaderBlock>
      </SContainer>
    </SHeader>
  );
};
export default Header;
