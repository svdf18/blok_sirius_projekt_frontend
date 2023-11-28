export const DeleteButtonComponent = ({ onDelete, itemId, ...restProps }) => {
  const handleClick = () => {
    onDelete(itemId);
  };

  return <button onClick={handleClick} {...restProps}>Delete</button>;
};