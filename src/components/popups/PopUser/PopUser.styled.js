import styled from "styled-components";
import { Link } from "react-router-dom";

export const SLinkNo = styled(Link)`
  text-decoration: none;
  width: 100%;
  height: 100%;
  color: #33399b;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #ffffff;
    //border-radius: 4px;
  }
`;

export const SLinkYes = styled(Link)`
  text-decoration: none;

  width: 100%;
  height: 100%;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #33399b;
  }
`;

export const SPopExit = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;
`;

export const SPopExitContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const SPopExitBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 370px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
`;

export const SPopExitTtl = styled.div`
  display: block;
  & h2 {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.4px;
    margin-bottom: 20px;
  }
`;

export const SPopExitForm = styled.form.attrs({ id: "formExit", action: "#" })`
  display: block;
`;

export const SPopExitFormGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SPopExitBtnYes = styled.button.attrs({
  id: "exitYes",
  type: "button",
})`
  width: 153px;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #ffffff;
  margin-right: 10px;

  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: #ffffff;
    color: #33399b;
    border-radius: 4px;
    border: 1px solid #33399b;
  }
`;

export const SPopExitBtnNo = styled.button.attrs({
  id: "exitNo",
  type: "button",
})`
  width: 153px;
  height: 30px;
  background-color: transparent;
  border-radius: 4px;

  border: 1px solid #33399b;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #ffffff;

  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: #33399b;
    color: #ffffff;
    // border-radius: 4px;
    border: 1px solid #33399b;
  }
`;
