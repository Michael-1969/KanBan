import styled from 'styled-components';

export const SCardLoader = styled.div`
    width: 220px;
    height: 130px;
    background-color: #c3c3c3;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
    padding: 15px 13px 19px;
    row-gap: 10px;
    border: none;

    &:not(:last-child){
         margin-bottom: 20px;
    }
`;

export const SCardLoaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 20px;
    width: 100%;
`;

export const SCardLoaderNameTask = styled.div`
        flex-grow: 1;
`;
