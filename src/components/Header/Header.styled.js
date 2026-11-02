import styled,{ css } from "styled-components";
// import { SCommonLink } from "../Global/Global";
import { SCommonLink } from "../Card/Card.styled";

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

// export const SHeaderBtnLink = styled(SCommonLink)`
//   color: #ffffff;
// `;
export const SHeaderBtnSpan = styled.span`
   margin: 0;

    text-decoration: none;
    cursor: pointer;
      &:visited {
        text-decoration: none;
        cursor: pointer;
      }

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
///////////////////////////////////////////////////////////////////////////////
// export const SPopUpUserSet = styled.div`
//   display: block;
//   position: absolute;
//   top: 61px;
//   right: 0;
//   width: 213px;
//   height: 205px;
//   border-radius: 10px;
//   border: 0.7px solid rgba(148, 166, 190, 0.4);
//   background: #fff;
//   box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
//   padding: 34px;
//   text-align: center;
//   z-index: 2;

//   &:target{ display: block}; 
// `;

// export const SButtonClose = styled.button.attrs({ type: "button" })`
//     position: absolute;
//     border: none;
//     top: 10px;
//     left: 50%;
//     transform: translateX(-50%);
//     background-image: url("../../../public/images/close.svg");
//     background-size: contain; 
//     background-repeat: no-repeat;
//     width: 20px;
//     height: 20px;
// `;

// export const SPopUpUserSetName = styled.p`
//     color: #000;
//     font-size: 14px;
//     font-weight: 500;
//     line-height: 21px;
//     letter-spacing: -0.14px;
//     margin-bottom: 4px;
// `;

// export const SPopUpUserSetMail = styled.p`
//     color: #94A6BE;
//     font-size: 14px;
//     line-height: 21px;
//     letter-spacing: -0.14px;
//     margin-bottom: 10px;
//   `;

// export const SPopUpUserSetTheme = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     margin-bottom: 30px;
// `;
// export const SPopUpUserSetText = styled.p`
//     color: #000;
//     font-size: 14px;
//     line-height: 21px;
//     letter-spacing: -0.14px;
// `;

// export const SPopUpUserSetInput = styled.input.attrs({ type: "checkbox" })`
//     position: relative;
//     width: 24px;
//     height: 13px;
//     border-radius: 100px;
//     background: #eaeef6;
//     outline: none;
//     appearance: none;
//     -moz-appearance: none;
//     -webkit-appearance: none;
//     cursor: pointer;

//   &::before {
//     content: "";
//     position: absolute;
//     top: 1px;
//     left: 1px;
//     width: 11px;
//     height: 11px;
//     border-radius: 50%;
//     background-color: #94a6be;
//     transition: 0.5s;
//   }

//   &:checked::before {
//     left: 12px;
//   }
// `;

// export const SButtonExit = styled.button.attrs({ type: "button" })`
//     width: 72px;
//     height: 30px;
//     background: transparent;
//     color: #565EEF;
//     border-radius: 4px;
//     border: 1px solid #565EEF;
//     &:hover {
//     background-color: #33399b;
//     color: #ffffff;
//   }
// `;

// export const SBtnLink = styled(SCommonLink)`
//   color: #565eef;
//   &:hover {
//     color: #ffffff;
//   }
// `
