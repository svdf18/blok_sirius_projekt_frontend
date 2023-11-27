import PropTypes from 'prop-types';
import { CardContainer, CardTitle, CardContent, CardIconLink, PlusIcon } from './CardElements.jsx';

const Card = ({ title, content, color, size, linkPath, backgroundImage }) => {
    return (
        <CardContainer color={color} size={size} backgroundImage={backgroundImage}>
            <CardIconLink>
                <PlusIcon/>
            </CardIconLink>
            <CardTitle to={linkPath}>{title}</CardTitle>
            <CardContent>{content}</CardContent>
        </CardContainer>
    );
};

Card.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    color: PropTypes.oneOf(['green', 'grey', 'white']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    linkPath: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string,
};

Card.defaultProps = {
    color: 'green',
    size: 'medium',
};

export default Card;