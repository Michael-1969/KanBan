const ModalPerconal = ({onCloseButtonClick}) => {
    return (
        <div className="header__pop-user-set pop-user-set">
                <button className="pop-user-set__close" onClick={onCloseButtonClick}></button>
                <p className="pop-user-set__name">Ivan Ivanov</p>
                <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                <div className="pop-user-set__theme">
                    <p>Темная тема</p>
                    <input type="checkbox" className="checkbox" name="checkbox" />
                </div>
                <button type="button" className="pop-user-set__exit _hover03">
                    <a href="#popExit">Выйти</a>
                </button>
        </div>
    )
}
export default ModalPerconal;