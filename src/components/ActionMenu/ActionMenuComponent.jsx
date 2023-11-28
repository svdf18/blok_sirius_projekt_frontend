import { useState } from 'react';
import PropTypes from 'prop-types';
import { ActionMenuContainer, ActionMenuLogoStar, StarIcon, ActionMenuLogo, ActionMenuTitleModal, ActionMenuModal, BreakLine } from './ActionMenuElements';
import SiriusLogo from '../../assets/sirius_logo.png'


const ActionMenuComponent = ({ title, formComponent: FormComponent, toggle }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false)
  };

  return (
    <ActionMenuContainer>
      <ActionMenuLogoStar>
        <StarIcon/>
      </ActionMenuLogoStar>
      <ActionMenuLogo to='/' onClick={toggle}>
        <img src={SiriusLogo}/>
      </ActionMenuLogo>
      <BreakLine/>
      <ActionMenuTitleModal onClick={openModal}>
        {title}
      </ActionMenuTitleModal >
      <ActionMenuModal isOpen={isModalOpen} onRequestClose={closeModal}>
        {FormComponent && (
          <FormComponent
            onSubmit={(formData) => {
              console.log("Form data:", formData);
              closeModal();
            }}
          />
        )}
        <button onClick={closeModal}>Close Modal</button>
      </ActionMenuModal>
    </ActionMenuContainer> 
  );
};

ActionMenuComponent.propTypes = {
  title: PropTypes.string,
  formComponent: PropTypes.elementType,
  toggle: PropTypes.func.isRequired,
};

export default ActionMenuComponent;
