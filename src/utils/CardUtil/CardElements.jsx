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

export const CardContainer = styled.div`
    border: none;
    border-radius: 28px;
    padding: 20px;
    margin: 20px;
    background-color: ${(props) => getColor(props.color)};
    color: ${(props) => getTextColor(props.color)};
`;

export const CardTitle = styled.h2`
    font-size: 24px;
    margin-bottom: 10px;
`;

export const CardContent = styled.p`
    font-size: 16px;
    color: inherit;
`;