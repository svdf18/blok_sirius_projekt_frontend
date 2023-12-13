import styled from 'styled-components';
import { CardContainer } from '../../utils/CardUtil/CardElements';


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
    gap: 18%;
    margin: 0 auto;
    margin-top: 5.9rem;
    justify-content: center;
    padding: 20px;

    @media screen and (max-width: 1080px) {
      grid-template-columns: 1fr;
      gap:0;
  }
`;

export const ActionMenuGridContainer = styled.div`
    display: relative;
    min-width: 200px;
    height: 100%;
    margin: 0 auto;
    margin-left: 0rem;
    justify-content: center;
    top: 0;
    height: 100%;
`;

export const EventDisplayGrid = styled.div`
    margin-left: 0;

    @media screen and (max-width: 1080px) {
      margin-left: -19px;
  }
`
export const CalendarContainer = styled(CardContainer)`
  display: flex;
  max-width: auto;
  margin: 0 auto;
  justify-content: center;
  align-items: flex-start;
  top: 0;
  height: 287px;
`;

export const Calendar = styled.div`
  display: flex;
  align-items: flex-start;
  height: 100%;
`;

export const TodayContainer = styled(CardContainer)`
  overflow: auto;
  min-width: 400px;

`;

export const UpcomingContainer = styled(CardContainer)`
  overflow: auto;
  min-width: 400px;

`;