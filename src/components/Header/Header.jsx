import { useState } from "react"
// import PopUpUserSet from "../popups/PopUpUserSet/PopUpUserSet.jsx";
import SContainer from "../Global/Container.styled.js";

import {SHeader,
        SHeaderBlock,
        SHeaderLogo,
        SLogoImg,
        SLink,
        SHeaderNav,
        SHeaderBtnMain,
        SHeaderBtnLink,
        SHeaderUserLink,
        } from '../Header/Header.styled.js';

import PopUpUserSet from "../popups/PopUpUserSet/PopUpUserSet.jsx";
const Header = () =>{

   const [showModal, setShowModal] = useState(false);

    const toggleModal = () => setShowModal(!showModal);
    

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
                        
                        <SHeaderUserLink href="#user-set-target" onClick={toggleModal}>
                                            Ivan Ivanov
                        </SHeaderUserLink>
                        {
                        showModal && (
                            <PopUpUserSet onCloseButtonClick={toggleModal}/>
                            // <SPopUpUserSet onCloseButtonClick={toggleModal}>
                            //     <SButtonClose onClick={toggleModal}></SButtonClose>
                            //         <SPopUpUserSetName>Ivan Ivanov</SPopUpUserSetName>
                            //             <SPopUpUserSetMail>ivan.ivanov@gmail.com</SPopUpUserSetMail>
                            //                 <SPopUpUserSetTheme>
                            //                     <SPopUpUserSetText>Темная тема</SPopUpUserSetText>
                            //                     <SPopUpUserSetInput name="checkbox" />
                            //                 </SPopUpUserSetTheme>
                            //                 <SButtonExit>
                            //                     <SBtnLink href="#popExit">Выйти</SBtnLink>
                            //                 </SButtonExit>
                            // </SPopUpUserSet>
                        )}
                    </SHeaderNav>
                </SHeaderBlock>
            </SContainer>
         </SHeader>
    );
}
export default Header;