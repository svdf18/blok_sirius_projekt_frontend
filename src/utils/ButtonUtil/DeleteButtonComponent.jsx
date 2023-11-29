import PropTypes from 'prop-types';

export const DeleteButtonComponent = ({ onDelete, itemId, ...restProps }) => {
  const handleClick = () => {
    onDelete(itemId);
  };

  return <button onClick={handleClick} {...restProps}>Delete</button>;
};

DeleteButtonComponent.propTypes = {
  onDelete: PropTypes.func.isRequired,
  itemId: PropTypes.number.isRequired,
};