import { useState } from "react"
import ModalPerconal from "../popups/ModalPersonal/ModalPersonal.jsx";


const Header = () =>{

//    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
   const [showModal, setShowModal] = useState(false);

    // const toggleUserMenu = () => {
    //         console.log("isUser = ",isUserMenuOpen)
    //         setIsUserMenuOpen(!isUserMenuOpen);
    // };

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return(
         <header className="header">
            <div className="container">
                <div className="header__block">
                    <div className="header__logo _show _light">
                         <a href="" target="_self">
                                <img src="images/logo.png" alt="logo" />
                        </a>
                    </div>
                    <div className="header__logo _dark">
                        <a href="" target="_self">
                            <img src="images/logo_dark.png" alt="logo" />
                        </a>
                    </div>
                    <nav className="header__nav">
                        <button type="button" id="btnMainNew" className="header__btn-main-new _hover01">
                                <a href="#popNewCard">Создать новую задачу</a>
                        </button>
                        {/* <button className="header__user _hover02" onClick={toggleUserMenu}>Ivan Ivanov</button> */}
                        <a href="#user-set-target" className="header__user _hover02" onClick={openModal}>Ivan Ivanov</a>
                        {
                        showModal && (
                            <ModalPerconal onCloseButtonClick={closeModal}/>
                        )}
                    </nav>
                </div>
            </div>
         </header>
    );
}
export default Header;