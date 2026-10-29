import styled from 'styled-components';

export const Sh1 = styled.h1`
   font-family: 'Roboto';
   font-weight: 600;
   font-size:48px;
   background-color: gray;
   color: black;
   padding: 10px 30px;
`;

export const SError = styled.p`
   font-family: 'Roboto';
   font-weight: 400;
   font-size:24px;
   background-color: gray;
   color: black;
   padding: 10px 30px;
`;

 export const SFlex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: ${(props) => props.height ?? "100%"};
    background-color: ${(props) => props.backgroundColor ?? "inherit"};
    row-gap: 30px;
 `;