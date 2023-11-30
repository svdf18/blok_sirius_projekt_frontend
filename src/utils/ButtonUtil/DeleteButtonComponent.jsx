import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import styled from 'styled-components';


export const DeleteButtonComponent = ({ deleteFunction, itemId, buttonText, itemType, ...restProps }) => {
  const [isConfirmationOpen, setConfirmationOpen] = useState(false);

  const handleOpenConfirmation = () => {
    setConfirmationOpen(true);
  };

  const handleCloseConfirmation = () => {
    setConfirmationOpen(false);
  };

  const handleDelete = () => {
    deleteFunction(itemId);
    handleCloseConfirmation();
  };

  return (
    <>
      <StyledDeleteButton onClick={handleOpenConfirmation} {...restProps}>
        {buttonText || <FaTrash />}
      </StyledDeleteButton>

      {isConfirmationOpen && (
        <ConfirmationDialog>
          <p>{`Are you sure you want to delete this ${itemType}?`}</p>
          <button onClick={handleDelete}>Yes</button>
          <button onClick={handleCloseConfirmation}>No</button>
        </ConfirmationDialog>
      )}
    </>
  );
};

DeleteButtonComponent.propTypes = {
  deleteFunction: PropTypes.func.isRequired,
  itemId: PropTypes.number.isRequired,
  buttonText: PropTypes.string,
  itemType: PropTypes.string.isRequired, // Added prop for item type
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
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  button {
    margin-right: 10px;
  }
`;
