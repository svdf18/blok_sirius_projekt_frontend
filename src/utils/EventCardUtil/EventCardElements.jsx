import styled from 'styled-components';

export const EventCardContainer = styled.div`
  background-color: '#4F5E6A';
  color: '#F7F7F7';
  width: auto;
  text-align: left;
  border: none;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(40, 36, 36, 0.12), 0 1px 2px rgba(78, 77, 77, 0.24);
  transition: all 30ms linear;

  &:hover {
    box-shadow: 0 2px 4px rgba(220, 198, 198, 0.12), 0 2px 4px rgba(78, 77, 77, 0.24);
  }
`;

export const CardContentContainer = styled.div`
  align-items: center;
`;

export const EventCardText = styled.p`
  font-size: 16px;
  margin: 0;
  color: inherit;
`;

export const ButtonCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  `;