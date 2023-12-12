import styled from 'styled-components';

const colorMappings = {
  lilac: '#DFC4ED',
  yellow: '#FFEBA4',
  default: '#DFC4ED',
};

export const RecommendationsDirectoryContainer = styled.div`
    width: auto;
    min-height: 100vh;
    position: relative;
    background: ${(props) => colorMappings[props.backgroundColor] || colorMappings.default};
`;

export const RecommendationsDirectoryGridContainer = styled.div`
  display: grid;
  margin-top: 5.9rem;
  /* padding-right: 6rem; */ /* Remove or adjust this line */
  width: auto;
  grid-template-columns: 1fr 2fr;

  @media screen and (max-width: 1440px) {
    grid-template-columns: 1fr 2fr;
  }

  @media screen and (max-width: 1260px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const RecommendationsDirectoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0px;
  width: 10vw;
  margin-left: 6rem;
  position: relative;
  background: inherit;

  @media screen and (max-width: 1440px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;
