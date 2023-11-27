import Masonry from 'react-masonry-css';
import styled from 'styled-components';

export const HomeContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    background: #DFC4ED;
`;

export const HomeContainerGrid = styled(Masonry)`
    display: flex;
    width: 80vw;
    margin: 0 auto;
    margin-top: 5.9rem;
    justify-content: center;
    align-items: ${({ breakpoint }) => breakpoint !== 2100 && 'flex-start'};

    .my-masonry-grid_column {
        background-clip: padding-box;
    }
`;

export const breakpointColumnsObj = {
    2100: 4,
    1440: 3,
    1080: 2,
    720: 1,
};