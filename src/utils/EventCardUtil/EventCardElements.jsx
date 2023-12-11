import styled from 'styled-components';

export const EventCardContainer = styled.div`
  background-color: '#4F5E6A';
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
  margin-top: 12px;
  cursor: pointer;

  &:hover {
    background-color: #C2DFD3;
    color: #2b2b2b;
    box-shadow: 0 2px 4px rgba(220, 198, 198, 0.12), 0 2px 4px rgba(78, 77, 77, 0.24);
  }
`;

export const EventCardText = styled.p`
  font-size: 16px;
  margin: 0;
  padding-top: 15px;
  color: inherit;
`;

export const ButtonCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  padding-right: 15px;

  margin-bottom: 10px;
  `;