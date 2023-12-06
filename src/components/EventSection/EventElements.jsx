import styled from 'styled-components';
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
`;

export const EventContainerGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    width: 80vw;
    margin: 0 auto;
    margin-top: 5.9rem;
    justify-content: center;

    @media screen and (max-width: 1080px) {
      grid-template-columns: 1fr;
  }
`;

export const ActionMenuGridContainer = styled.div`
    display: block;
    min-width: 400px;
    margin: 0 auto;
    margin-left: 6rem;
    justify-content: center;
    top: 0;
    height: 100%;
`;

export const CalendarContainer = styled(CardContainer)`
    display: flex;
    max-width: auto;
    margin: 0 auto;
    justify-content: center;
    top: 0;
    height: 100%;
`;

export const Calendar = styled.div`
    display: flex;
`

export const TodayContainer = styled(CardContainer)`
  overflow: auto;
  min-width: 400px;
  background-color: ${(props) => colorMappings[props.color] || colorMappings.default};
`;

export const UpcomingContainer = styled(CardContainer)`
  overflow: auto;
  min-width: 400px;
  background-color: ${(props) => colorMappings[props.color] || colorMappings.default};
`;