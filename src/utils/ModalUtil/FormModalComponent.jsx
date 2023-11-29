import PropTypes from 'prop-types';
import { ModalContainer, Icon, CloseIcon } from './FormModalElements';

const ModalComponent = ({ isOpen, onRequestClose, formComponent: FormComponent, onSubmit }) => {
  const closeModal = () => {
    onRequestClose();
  };

  return (
  <>
    <ModalContainer isOpen={isOpen} onRequestClose={() => {}}>
    <Icon onClick={closeModal}>
            <CloseIcon />
          </Icon>
      {FormComponent && <FormComponent onSubmit={onSubmit} />}
    </ModalContainer>
  </>
  );
};

ModalComponent.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  formComponent: PropTypes.elementType,
  onSubmit: PropTypes.func.isRequired,
};

export default ModalComponent;