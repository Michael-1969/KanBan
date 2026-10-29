import styled from "styled-components";

// Временный styled-component
export const SPopNewCard = styled.div`
  /* display: none; */
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;

  /* &:target {
    display: block;
  } */
`;

export const SPopNewCardContainer = styled.div`
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

export const SPopNewCardBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
`;

export const SPopNewCardContent = styled.div`
  display: block;
  text-align: left;
`;

export const SPopNewCardTtl = styled.div`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
`;
////////////////////////////////////////////////////////////////////////
export const SButtonClose = styled.button.attrs({ type: "button" })`
  position: absolute;
  border: none;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-image: url("../../../public/images/close.svg");
  background-size: contain;
  background-repeat: no-repeat;
  width: 20px;
  height: 20px;
`;
/////////////////////////////////////////////////////////////////////////
