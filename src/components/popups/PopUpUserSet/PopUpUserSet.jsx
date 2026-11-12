import { Link } from "react-router-dom";
import {
  SPopUpUserSet,
  SButtonClose,
  SPopUpUserSetName,
  SPopUpUserSetMail,
  SPopUpUserSetTheme,
  SPopUpUserSetText,
  SPopUpUserSetInput,
  SButtonExit,
  SBtnLink,
} from "./PopUpUserSet.styled";

const PopUpUserSet = ({ref,onCloseButtonClick }) => {

  return (
    <SPopUpUserSet>
      <SButtonClose onClick={onCloseButtonClick}></SButtonClose>
      <SPopUpUserSetName>{ref.current.name}</SPopUpUserSetName>
      <SPopUpUserSetMail>{ref.current.login}</SPopUpUserSetMail>
      <SPopUpUserSetTheme>
        <SPopUpUserSetText>Темная тема</SPopUpUserSetText>
        <SPopUpUserSetInput name="checkbox" />
      </SPopUpUserSetTheme>
      <Link to="/exit">
        <SButtonExit>
          {/* <SBtnLink href="#popExit">Выйти</SBtnLink> */}
          <SBtnLink>Выйти</SBtnLink>
        </SButtonExit>
      </Link>
    </SPopUpUserSet>
  );
};
export default PopUpUserSet;
