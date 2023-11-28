export const UpdateButtonComponent = ({ onUpdate, itemId, ...restProps }) => {
  const handleClick = () => {
    onUpdate(itemId, restProps);
  };

  return <button onClick={handleClick}>Update</button>;
};