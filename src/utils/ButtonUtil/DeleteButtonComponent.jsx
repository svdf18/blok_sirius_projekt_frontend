import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import styled from 'styled-components';


export const DeleteButtonComponent = ({ deleteFunction, itemId, buttonText, itemType, ...restProps }) => {
  const [isConfirmationOpen, setConfirmationOpen] = useState(false);

  const handleOpenConfirmation = (event) => {
    event.stopPropagation();
    setConfirmationOpen(true);
  };

  const handleCloseConfirmation = (event) => {
    event?.stopPropagation();
    setConfirmationOpen(false);
  };

  const handleDelete = (event) => {
    event.stopPropagation();
    deleteFunction(itemId, event);
    handleCloseConfirmation();
  };

  return (
    <>
      <StyledDeleteButton onClick={(event) => handleOpenConfirmation(event)} {...restProps}>
        {buttonText || <FaTrash />}
      </StyledDeleteButton>

      {isConfirmationOpen && (
        <ConfirmationDialog>
          <p>{`Are you sure you want to delete this ${itemType}?`}</p>
          <StyledDeleteButtonConfirm onClick={(event) => handleDelete(event)}>Yes</StyledDeleteButtonConfirm>
          <StyledDeleteButtonConfirm onClick={(event) => handleCloseConfirmation(event)}>No</StyledDeleteButtonConfirm>
        </ConfirmationDialog>
      )}
    </>
  );
};

DeleteButtonComponent.propTypes = {
  deleteFunction: PropTypes.func.isRequired,
  itemId: PropTypes.number.isRequired,
  buttonText: PropTypes.string,
  itemType: PropTypes.string.isRequired,
  event: PropTypes.object,
};

const StyledDeleteButton = styled.div`
  position: relative;
  display: flex;
  left: 90%;
  align-items: center;
  justify-content: center;
  height: 1.0rem;
  width: 1.0rem;
  margin-bottom: 0.5rem;
  background-color: none;
  color: #2b2b2b;
  border-radius: 1.5rem;
  transition: all 300ms linear;
  cursor: pointer;


  &:hover {
    color: #2b2b2b;
    border-radius: 0.75rem;
    transform: scale(1.2);
  }
`;

const ConfirmationDialog = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  border-radius: 28px;
  transform: translate(-50%, -50%);
  padding: 30px;
  background-color: white;
  border: 1px solid #ccc;
  color: #2b2b2b;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const StyledDeleteButtonConfirm = styled.div`
  position: relative;
  background-color: #C2DFD3;
  border: none;
  text-align: center;
  border-radius: 28px;
  font-size: large;
  padding: 0.5rem;
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
`;
