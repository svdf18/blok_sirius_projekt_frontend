import styled from 'styled-components';

export const DirectoryContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    position: relative;
    background: #DFC4ED;
`;

export const DirectoryGridContainer = styled.div`
  display: grid;
  margin-top: 5.9rem;
  width: 80vw;
  grid-template-columns: 1fr 3fr;

  @media screen and (max-width: 1440px) {
    grid-template-columns: 1fr 2fr;
  }

  @media screen and (max-width: 1080px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const ActionMenuGridContainer = styled.div`
    display: flex;
    width: 400px;
    margin: 0 auto;
    margin-left: 6rem;
    justify-content: center;
    position: sticky;
    top: 0;
    z-index: 100;
    height: 100%;
`;

export const DirectoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0px;
  width: auto;
  position: relative;
  background: #DFC4ED;

  @media screen and (max-width: 2100px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 1080px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;
