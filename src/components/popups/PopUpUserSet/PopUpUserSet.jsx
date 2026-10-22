import {SPopUpUserSet,
        SButtonClose,
        SPopUpUserSetName,
        SPopUpUserSetMail,
        SPopUpUserSetTheme,
        SPopUpUserSetText,
        SPopUpUserSetInput,
        SButtonExit,
        SBtnLink} from './PopUpUserSet.styled';

const PopUpUserSet = ({onCloseButtonClick}) => {
    return (
        <SPopUpUserSet>
                <SButtonClose onClick={onCloseButtonClick}></SButtonClose>
                <SPopUpUserSetName>Ivan Ivanov</SPopUpUserSetName>
                <SPopUpUserSetMail>ivan.ivanov@gmail.com</SPopUpUserSetMail>
                <SPopUpUserSetTheme>
                    <SPopUpUserSetText>Темная тема</SPopUpUserSetText>
                    <SPopUpUserSetInput name="checkbox" />
                </SPopUpUserSetTheme>
                <SButtonExit>
                    <SBtnLink href="#popExit">Выйти</SBtnLink>
                </SButtonExit>
        </SPopUpUserSet>
    )
}
export default PopUpUserSet;