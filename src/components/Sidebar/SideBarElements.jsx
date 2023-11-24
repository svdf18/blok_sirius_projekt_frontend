import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 40vw;
    @media screen and (max-width: 720px) {
      width: 100vw;
      }
  height: 100%;
  background-color: #2b2b2b;
  display: grid;
  align-items: center;
  top: 0;
  right: 0;
  right: ${({ isOpen }) => (isOpen ? '800vw' : '0')};
  transition: 0.08s ease-in-out;
`;

export const CloseIcon = styled(FaTimes)`
  color: #C2DFD3;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background-color: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
    color: #C2DFD3;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat (6, 80px);
    text-align: left;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`

export const SidebarLink = styled(Link)`
    display: flex;
    align-items: left;
    justify-content: left;
    font-size: 2.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #C2DFD3;
    cursor: pointer;
    
    &:hover {
        color: #4F5E6A;
        transition: 0.2s ease-in-out;
    }
`

export const MobileIconWrapper = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background-color: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
  z-index: 999;
`;

export const MobileIcon = styled(FaBars)`
    color: #141313;
    font-size: 2rem;
`;