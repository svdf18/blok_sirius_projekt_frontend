import styled from 'styled-components';

export const AdminPeopleDirectoryContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    position: relative;
    background: #FFEBA4;
`

export const AdminPeopleDirectoryH1Container = styled.div`
    position: fixed;
    top: -2.5rem;
    width: 100%;
    background: #FFEBA4;
    text-align: center;
    padding: 20px;
    z-index: 100;
`

export const AdminPeopleDirectoryH1 = styled.h1`
        font-size: 48px;
    color: #141313;
`

export const AdminPeopleDirectoryGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 16px;
    padding: 16px;
    max-width: 1400px;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
        max-width: 800px;
    }

    @media screen and (max-width: 480px) {
        max-width: 300px;
    }
`;