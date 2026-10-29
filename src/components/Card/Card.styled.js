import styled,{ keyframes } from 'styled-components';


const cardAnimation = keyframes`
    0% {
        height: 0;
        opacity: 0;
    }
    100% {
        height: auto;
        opacity: 1;
    }
`;

export const titleMap = {
  'Web Design': {
    backgroundColor: '#FFE4C2',
    color: '#FF6D00'
  },
  'Research': {
    backgroundColor: '#B4FDD1', 
    color: '#06B16E'
  },
  'Copywriting': {
    backgroundColor: '#E9D4FF',
    color: '#9A48F1'
  }
};


export const SColumnCards = styled.div`
    width: 100%;
    display: block;
    position: relative;
    @media ${({theme}) => theme.media.max1200}{
        width: 100%;
        display: flex;
        overflow-y: auto;
    }
`;

export const SCardsItem = styled.div`
    padding: 5px;
    animation-name: ${cardAnimation};
    animation-duration: 500ms;
    animation-timing-function: linear;
`;

export const SCard = styled.div`
   width: 220px;
    height: 130px;
    background-color: #FFFFFF;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
    padding: 15px 13px 19px;

    @media ${({theme}) => theme.media.max1200}{
         width: 220px;
        height: 130px;
        background-color: #FFFFFF;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: stretch;
        padding: 15px 13px 19px;
    }
`;

export const SCardGroup = styled.div`
    width: 100%;
    height: 20px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;

`;

export const SCardTitle = styled.h3`
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    color: #000000;
    margin-bottom: 10px;
`;

export const SCardContent = styled.div`
    height: 64px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`;

export const SCardDate = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    
    & svg {
        width: 13px;
    }
    & p {
        margin-left: 6px;
        font-size: 10px;
        line-height: 13px;
        color: #94a6be;
        letter-spacing: 0.2px;
    }
`;

export const SCardTheme = styled.div`
    width: auto;
    height: 20px;
    padding: 5px 14px;
    border-radius: 18px;

    background-color: ${props => titleMap[props.topic]?.backgroundColor};
    color: ${props => titleMap[props.topic]?.color};
`;

export const SCardThemeTopic = styled.p`
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;

    background-color: ${props => titleMap[props.topic]?.backgroundColor};
    color: ${props => titleMap[props.topic]?.color};
`;

export const SCardBtn = styled.div`
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 2px;
    & div {
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: #94a6be;
    }
`;

export const SCommonLink = styled.a`
    &:focus,
    &:active {
        outline: none;
    }
   text-decoration: none;
   cursor: pointer;
   &:visited {
    text-decoration: none;
    cursor: pointer;
  }
`