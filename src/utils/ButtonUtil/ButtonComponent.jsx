import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { ButtonContainer } from './ButtonElements.jsx';

const ButtonComponent = ({ label, variant, route }) => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate(route);
    };

    return (
        <ButtonContainer variant={variant} onClick={handleButtonClick}>
            {label}
        </ButtonContainer>
    );
};

ButtonComponent.propTypes = {
    label: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['green', 'grey', 'white']),
    route: PropTypes.string.isRequired,
};

export default ButtonComponent;