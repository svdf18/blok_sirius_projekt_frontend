import PropTypes from 'prop-types';
import { ModalContainer, Icon, CloseIcon } from './FormModalElements';

const CardModalComponent = ({ isOpen, onRequestClose }) => {
  const closeModal = () => {
    onRequestClose();
  };

  return (
    <>
      <ModalContainer isOpen={isOpen} onRequestClose={() => {}}>
        <Icon onClick={closeModal}>
          <CloseIcon />
        </Icon>
      </ModalContainer>
    </>
  );
};

CardModalComponent.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  cardComponent: PropTypes.elementType,
  title: PropTypes.string,
};

export default CardModalComponent;
