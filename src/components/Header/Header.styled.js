import styled,{ css } from "styled-components";
import { SCommonLink } from "../Global/Global";

export const SHeader = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff; 
`;

export const SHeaderBlock = styled.div`
    height: 70px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    position: relative;
    top: 0;
    left: 0;
    padding: 0 10px;
`;
export const SHeaderLogo = styled.div`
  ${props => props.hide && css`
     display: ${({theme}) => theme.display.dark}; 
  `}
`;

export const SLink = styled.a`
  text-decoration: none;
  display: inline-block; 
`;

export const SLogoImg = styled.img`
    width: 85px;
    height: auto;
    display: block;
`;

export const SHeaderNav = styled.nav`
    max-width: 290px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SHeaderBtnMain = styled.button.attrs({ type: "button" })`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565eef;
  color: #ffffff;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;

  &:hover {
    background-color: #33399b;
  }
`;

export const SHeaderBtnLink = styled(SCommonLink)`
  color: #ffffff;
`;

export const SHeaderUserLink = styled(SCommonLink)`
  border: none;
  background-color: transparent;
  width: 106px;
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: #565eef;

  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid #565eef;
    border-bottom: 1.9px solid #565eef;
    transform: rotate(-45deg);
    margin: -5px 0 0 5px;
    padding: 0;
  }
    
     &:hover{
       color: #33399b;
    } 

    &:hover {
      &::after{
       border-left-color: #33399b;
       border-bottom-color: #33399b;
      }
    }

`;
