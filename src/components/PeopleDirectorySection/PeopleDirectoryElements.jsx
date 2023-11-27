import styled from 'styled-components';

export const PeopleDirectoryContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding-top: 2.4rem;
    padding-right: 0px;
    padding-left: 0px;
    width: 100vw;
    height: 100vh;
    position: relative;
    background: #DFC4ED;
`

export const PeopleDirectoryGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 90vw;
    height: 90vh;
    position: relative;
    background: #DFC4ED;

    @media screen and (max-width: 1260px) {
    grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (max-width: 1080px) {
    grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    }
`