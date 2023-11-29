import PropTypes from 'prop-types';
import Modal from 'react-modal';

const ModalComponent = ({ isOpen, onRequestClose, formComponent: FormComponent, onSubmit }) => {
  const closeModal = () => {
    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={() => {}}>
      {FormComponent && <FormComponent onSubmit={onSubmit} />}
      <button onClick={closeModal}>Close Modal</button>
    </Modal>
  );
};

ModalComponent.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  formComponent: PropTypes.elementType,
  onSubmit: PropTypes.func.isRequired,
};

export default ModalComponent;