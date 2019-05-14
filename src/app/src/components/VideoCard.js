import React from 'react';
import styled from 'styled-components';

const StyledVideoCard = styled.img`
    border-radius: 100px;
    border: ${props => (props.selected ? '#bfff00 3px solid' : 'none')};
`;

const VideoCard = ({ fish, selected }) => {
    const picPath = `${fish.path}.jpg`;
    return (
        <StyledVideoCard
            src={picPath}
            alt={fish.commonName}
            selected={selected}
        />
    );
};

export default VideoCard;
