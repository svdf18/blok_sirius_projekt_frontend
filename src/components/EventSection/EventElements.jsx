import styled from 'styled-components';
import Masonry from 'react-masonry-css';
import { CardContainer } from '../../utils/CardUtil/CardElements';

/* Define color mappings */
const colorMappings = {
  green: '#4CAF50',
  blue: '#2196F3',
  orange: '#FF9800',
};

/* EventSectionContainer styles */
export const EventContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background: ${(props) => colorMappings[props.backgroundColor] || colorMappings.default};
`;

export const EventContainerGrid = styled(Masonry)`
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

export const ActionMenuGridContainer = styled.div`
    display: flex;
    width: 400px;
    margin: 0 auto;
    margin-left: 6rem;
    justify-content: center;
    top: 0;
    height: 100%;
`;

/* CalendarContainer styles */
export const CalendarContainer = styled(CardContainer)`
    display: flex;
    width: 400px;
    margin: 0 auto;
    margin-left: 6rem;
    justify-content: center;
    top: 0;
    height: 100%;
`;

/* TodayContainer styles */
export const TodayContainer = styled(CardContainer)`
  grid-column: 2;
  grid-row: 1;
  overflow: auto;
  background-color: ${(props) => colorMappings[props.color] || colorMappings.default};
`;

/* UpcomingContainer styles */
export const UpcomingContainer = styled(CardContainer)`
  grid-column: 2;
  grid-row: 2;
  overflow: auto;
  background-color: ${(props) => colorMappings[props.color] || colorMappings.default};
`;

export const breakpointColumnsObj = {
    2100: 4,
    1440: 3,
    1080: 2,
    720: 1,
};
