import styled from 'styled-components';

export const EventCardContainer = styled.div`
  background-color: '#2b2b2b';
  color: '#F7F7F7';
  width: auto;
  text-align: left;
  border: none;
  border-radius: 14px;
  box-shadow: 0 1px 3px rgba(40, 36, 36, 0.12), 0 1px 2px rgba(78, 77, 77, 0.24);
  transition: all 30ms linear;

  &:hover {
    box-shadow: 0 2px 4px rgba(220, 198, 198, 0.12), 0 2px 4px rgba(78, 77, 77, 0.24);
  }
`;

export const CardContentContainer = styled.div`
  align-items: center;
  border-radius: 14px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 10px;
  margin-top: 12px;
  background-color: #4F5E6A;
  cursor: pointer;


  &:hover {
    background-color: #C2DFD3;
    color: #2b2b2b;
    box-shadow: 0 2px 4px rgba(220, 198, 198, 0.12), 0 2px 4px rgba(78, 77, 77, 0.24);
  }
`;

export const EventCardDate = styled.p`
  font-size: 12px;
  font-weight: bold;
  padding-top: 10px;

`

export const EventCardText = styled.p`
  font-size: 16px;
  margin: 0;
  padding-top: 15px;
  color: inherit;

  @media screen and (max-width: 720px) {
    font-size: 14px;
  }
`;

export const ButtonCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  padding-right: 15px;

  margin-bottom: 10px;
  `;

export const EventCardAttending = styled.p`
  font-size: 12px;
  font-weight: bold;
  padding-top: 10px;
  border-top: 1px solid;

`

export const EventCardTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  padding-bottom: 10px;
  color: inherit;
  border-bottom: 1px solid;
`;

export const EventButtonContainer = styled.div`
  display: flex;
  position: relative;
  margin-top: 30px;
`;

export const EventDetailButtons = styled.button`
  position: relative;
  background-color: #C2DFD3;
  border: none;
  border-radius: 20px;
  font-size: small;
  padding: 1rem;
  font-weight: bold;
  margin: 1rem auto;
  display: block;
  width: ${({ adaptiveWidth }) => adaptiveWidth ? 'auto' : '30%'};
  box-shadow: 0 0.5px 1px rgba(40, 36, 36, 0.12), 0 1px 2px rgba(78, 77, 77, 0.24);
  transition: 300ms linear;
  cursor: pointer;

  &:hover {
    background-color: #2b2b2b;
    color: #F7F7F7;
    border-radius: 14px;
  }
`
