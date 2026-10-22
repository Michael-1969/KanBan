import { useState } from "react"
import PopUpUserSet from "../popups/PopUpUserSet/PopUpUserSet.jsx";
import SContainer from "../Global/Container.styled.js";

import {SHeader,
        SHeaderBlock,
        SHeaderLogo,
        SLogoImg,
        SLink,
        SHeaderNav,
        SHeaderBtnMain,
        SHeaderBtnLink,
        SHeaderUserLink} from '../Header/Header.styled.js';


const Header = () =>{

   const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return(
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
                        <SHeaderBtnMain id="btnMainNew">
                                <SHeaderBtnLink href="#popNewCard">Создать новую задачу</SHeaderBtnLink>
                        </SHeaderBtnMain>
                        
                        <SHeaderUserLink href="#user-set-target" onClick={openModal}>
                                            Ivan Ivanov
                        </SHeaderUserLink>
                        {
                        showModal && (
                            <PopUpUserSet onCloseButtonClick={closeModal}/>
                        )}
                    </SHeaderNav>
                </SHeaderBlock>
            </SContainer>
         </SHeader>
    );
}
export default Header;