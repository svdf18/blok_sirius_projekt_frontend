import PropTypes from 'prop-types';

export const UpdateButtonComponent = ({ onUpdate, itemId, ...restProps }) => {
  const handleClick = () => {
    onUpdate(itemId, restProps);
  };

  return <button onClick={handleClick}>Update</button>;
};

UpdateButtonComponent.propTypes = {
  onUpdate: PropTypes.func.isRequired,
  itemId: PropTypes.number.isRequired,
};