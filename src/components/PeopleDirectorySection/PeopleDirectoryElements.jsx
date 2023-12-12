
import styled from 'styled-components';

const colorMappings = {
  lilac: '#DFC4ED',
  yellow: '#FFEBA4',
  default: '#DFC4ED',
};

export const DirectoryContainer = styled.div`
    width: 90vw;
    min-height: 100vh;
    position: relative;
    background: ${(props) => colorMappings[props.backgroundColor] || colorMappings.default};
`;

export const DirectoryGridContainer = styled.div`
  display: grid;
  margin-top: 5.9rem;
  padding-right: 6rem;
  width: auto;
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
    margin-left: 4rem;
    justify-content: center;
    top: 0;
    height: 100%;
`;

export const DirectoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0px;
  width: auto;
  margin-left: 4rem;
  position: relative;
  background: inherit;

  @media screen and (max-width: 1440px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;
