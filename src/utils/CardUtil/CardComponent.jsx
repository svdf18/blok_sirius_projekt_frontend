import PropTypes from 'prop-types';
import { CardContainer, CardTitle, CardContent } from './CardElements.jsx';
import ButtonComponent from '../ButtonUtil/ButtonComponent.jsx';

const Card = ({ title, content, color, buttonText, buttonRoute }) => {
    return (
        <CardContainer color={color}>
            <CardTitle>{title}</CardTitle>
            <CardContent>{content}</CardContent>
            {buttonText && buttonRoute && (
                <ButtonComponent label={buttonText} variant={color} route={buttonRoute} />
            )}
        </CardContainer>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    color: PropTypes.oneOf(['green', 'grey', 'white']),
    buttonText: PropTypes.string, // Optional prop for button text
    buttonRoute: PropTypes.string, // Optional prop for button route
};

Card.defaultProps = {
    color: 'green', // Set a default color if not provided
};

export default Card;