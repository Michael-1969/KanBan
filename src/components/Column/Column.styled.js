import styled from 'styled-components';


export const SColumn = styled.div`
    width: 20%;
    margin: 0 auto;
    display: block;
@media ${({theme}) => theme.media.max1200}{
    width: 100%;
    margin: 0 auto;
    display: block;
}
`;
export const SColumnBlockTitle = styled.div`
    padding: 0 10px;
    margin: 15px 0;
`;
export const SColumnTitles = styled.p`
    color: #94a6be;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
`;