import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';
import styled from 'styled-components';

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

  &:hover {
    color: #2b2b2b;
    border-radius: 0.75rem;
    transform: scale(1.2);
  }
`;

const DeleteButtonComponent = ({ handleDelete, onClick, buttonText }) => {
  const handleClick = handleDelete || onClick; // Use handleDelete if provided, else use onClick

  return (
    <StyledDeleteButton onClick={handleClick}>
      {buttonText || <FaTrash />}
    </StyledDeleteButton>
  );
};

DeleteButtonComponent.propTypes = {
  handleDelete: PropTypes.func, // Use handleDelete if provided
  onClick: PropTypes.func, // Use onClick if handleDelete is not provided
  buttonText: PropTypes.string, // Text for the button (optional)
};

export default DeleteButtonComponent;