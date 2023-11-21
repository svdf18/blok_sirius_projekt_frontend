import styled from 'styled-components';

const getColor = (color) => {
    switch (color) {
        case 'green':
            return '#C2DFD3';
        case 'grey':
            return '#4F5E6A';
        case 'white':
            return '#F7F7F7';
        default:
            return '#4F5E6A';
    }
};

const getTextColor = (color) => {
    switch (color) {
        case 'green':
        case 'white':
            return '#4F5E6A';
        case 'grey':
            return '#F7F7F7';
        default:
            return '#F7F7F7';
    }
};

export const ButtonContainer = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: ${(props) => getColor(props.variant)};
    color: ${(props) => getTextColor(props.variant)};
    font-size: 16px;
`;