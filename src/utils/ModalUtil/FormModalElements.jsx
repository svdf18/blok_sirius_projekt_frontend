import styled from 'styled-components';
import Modal from 'react-modal'
import { FaTimes } from 'react-icons/fa';


export const ModalContainer = styled(Modal)`
    display: block;
    position: relative;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 28px;
    padding: 20px;
    background-color: #F7F7F7;
    max-width: 70%;
    margin: auto;
    margin-top: 6rem;
    outline: none;

        & > * {
        margin-bottom: 20px;
    }
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem; 
  right: 1.2rem;
  background-color: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
  z-index: 100;
`;

export const CloseIcon = styled(FaTimes)`
  color: #2b2b2b;
`;