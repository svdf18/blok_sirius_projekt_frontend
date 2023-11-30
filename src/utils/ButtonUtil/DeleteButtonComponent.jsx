import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';
import styled from 'styled-components';

export const DeleteButtonComponent = ({ onDelete, itemId, buttonText, ...restProps }) => {
  const handleClick = () => {
    onDelete(itemId);
  };

  return <StyledDeleteButton onClick={handleClick} {...restProps}>
    {buttonText || <FaTrash />}
  </StyledDeleteButton>;
};

DeleteButtonComponent.propTypes = {
  onDelete: PropTypes.func.isRequired,
  itemId: PropTypes.number.isRequired,
  buttonText: PropTypes.string,
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

