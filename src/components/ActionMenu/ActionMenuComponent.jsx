import { useState } from 'react';
import PropTypes from 'prop-types';
import { ActionMenuContainer, ActionMenuLogoStar, StarIcon, ActionMenuLogo, ActionMenuTitleModal, BreakLine } from './ActionMenuElements';
import SiriusLogo from '../../assets/sirius_logo.png';
import ModalComponent from '../../utils/ModalUtil/ModalComponent.jsx';

const ActionMenuComponent = ({ title, formComponent: FormComponent, toggle }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <ActionMenuContainer>
      <ActionMenuLogoStar>
        <StarIcon />
      </ActionMenuLogoStar>
      <ActionMenuLogo to='/' onClick={toggle}>
        <img src={SiriusLogo} alt="Sirius Logo" />
      </ActionMenuLogo>
      <BreakLine />
      <ActionMenuTitleModal onClick={openModal}>
        {title}
      </ActionMenuTitleModal>

      <ModalComponent
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        formComponent={FormComponent}
        onSubmit={(formData) => {
          console.log('Form data:', formData);
          closeModal();
        }}
      />
    </ActionMenuContainer>
  );
};

ActionMenuComponent.propTypes = {
  title: PropTypes.string,
  formComponent: PropTypes.elementType,
  toggle: PropTypes.func.isRequired,
};

export default ActionMenuComponent;