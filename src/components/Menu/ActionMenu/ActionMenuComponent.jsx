import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ActionMenuContainer, ActionMenuLogoStar, StarIcon, ActionMenuLogo, ActionMenuTitleModal, BreakLine } from './ActionMenuElements';
import SiriusLogo from '../../../assets/sirius_logo.png';
import ModalComponent from '../../../utils/ModalUtil/FormModalComponent.jsx';

const ActionMenuComponent = ({ menuItems = [], toggle }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  const openModal = (menuItem) => {
    setSelectedMenuItem(menuItem);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedMenuItem(null);
    setIsModalOpen(false);
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
      {menuItems &&
        menuItems.map((menuItem, index) => (
          <React.Fragment key={index}>
            <ActionMenuTitleModal onClick={() => openModal(menuItem)}>
              {menuItem.title}
            </ActionMenuTitleModal>
          </React.Fragment>
        ))}

      <ModalComponent
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        formComponent={selectedMenuItem?.formComponent}
        title={selectedMenuItem?.title}
        onSubmit={(formData) => {
          console.log('Form data:', formData);
          closeModal();
        }}
      />
    </ActionMenuContainer>
  );
};


ActionMenuComponent.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      formComponent: PropTypes.elementType.isRequired,
    })
  ),
  toggle: PropTypes.func,
};

export default ActionMenuComponent;
