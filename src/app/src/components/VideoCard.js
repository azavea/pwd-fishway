import React from 'react';
import styled from 'styled-components';
import { themeGet } from 'styled-system';

const StyledVideoCard = styled('img')(props => ({
    borderRadius: '100px',
    border: props.selected
        ? `${themeGet('colors.greens.1')(props)} 3px solid`
        : 'none',
}));

const VideoCard = ({ fish, selected }) => {
    return (
        <StyledVideoCard
            src={fish.photo}
            alt={fish.commonName}
            selected={selected}
        />
    );
};

export default VideoCard;
