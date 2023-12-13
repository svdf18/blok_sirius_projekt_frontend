import PropTypes from 'prop-types';
import { FaPen } from 'react-icons/fa';
import styled from 'styled-components';

export const UpdateButtonComponent = ({ onUpdate, itemId, buttonText, itemProps, ...restProps }) => {
  const handleClick = (event) => {
    event.stopPropagation();
    onUpdate(itemId, itemProps);
  };

  return (
    <StyledUpdateButton onClick={(event) => handleClick(event)} {...restProps}>
      {buttonText || <FaPen />}
    </StyledUpdateButton>
  );
};

UpdateButtonComponent.propTypes = {
  onUpdate: PropTypes.func.isRequired,
  itemId: PropTypes.number.isRequired,
  buttonText: PropTypes.string,
  itemProps: PropTypes.object,
  event: PropTypes.object,
};

const StyledUpdateButton = styled.div`
  position: relative;
  display: flex;
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
