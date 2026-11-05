import { Sh1, SError, SFlex } from "../NotFoundPage/NotFoundPage.styled";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <SFlex height="500px">
      <SFlex backgroundColor="gray">
        <Sh1>The page was not found.</Sh1>
        <SError>Error: 404</SError>
        <Link to={"/"}>Return to main page</Link>
      </SFlex>
    </SFlex>
  );
};

export default NotFoundPage;
