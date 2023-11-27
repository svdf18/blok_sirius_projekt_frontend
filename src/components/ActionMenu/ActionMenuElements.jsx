import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const ActionMenuContainer = styled.div`
    border: none;
    border-radius: 28px;
    max-height: 10rem;
    max-width: auto;
    padding: 20px;
    margin: 20px;
    background-color: #f7f7f7;
    color: #4F5E6A;
    box-shadow: 0 1px 3px rgba(40, 36, 36, 0.12), 0 1px 2px rgba(78, 77, 77, 0.24);
    transition: all 30ms linear;

    &:hover {
      box-shadow: 0 2px 4px rgba(220, 198, 198, 0.12), 0 2px 4px rgba(78, 77, 77, 0.24);
    }
`

export const ActionMenuLogoStar = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.4rem;
  width: 2.4rem;
  margin-bottom: 0.5rem;
  box-shadow: 0 1px 3px rgba(220, 198, 198, 0.12), 0 1px 2px rgba(78, 77, 77, 0.24);
  background-color: #4F5E6A;
  color: #C2DFD3;
  border-radius: 1.5rem;
  transition: all 300ms linear;

  &:hover {
    background-color: #C2DFD3;
    color: #2b2b2b;
    border-radius: 0.75rem;
    transform: scale(1.3);
  }
`;

export const StarIcon = styled(FaStar)`
`;

export const ActionMenuLogo = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7;
  img {
    width: 80%; 
    height: auto; 
  }
`