import { MobileIcon, MobileIconWrapper } from './SideBarElements';
import PropTypes from 'prop-types';

export const SidebarButtonComponent = ({ onClick }) => {
    return (
      <MobileIconWrapper>
        <MobileIcon onClick={onClick}/>
      </MobileIconWrapper>
    );
  };

  SidebarButtonComponent.propTypes = {
    onClick: PropTypes.func.isRequired,
  };