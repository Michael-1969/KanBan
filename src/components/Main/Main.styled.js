import styled from 'styled-components';

export const SMain = styled.main`
    width: 100%;
    background-color: #EAEEF6;
`;

export const SMainBlock = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 25px 0 49px;
    @media ${({theme}) => theme.media.max1200}{
        
        width: 100%;
        margin: 0 auto;
        padding: 40px 0 64px;
    } 
    
`;

export const SMainContent = styled.div`
    width: 100%;
    display: flex;
    @media ${({theme}) => theme.media.max1200}{
        display: block;
    }
`