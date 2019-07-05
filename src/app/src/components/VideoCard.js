import React from 'react';
import styled from 'styled-components';
import { themeGet } from 'styled-system';

const StyledVideoCard = styled('img')(props => ({
    borderRadius: '4px',
    boxShadow: props.selected
        ? `0 0 0 1px ${themeGet('colors.teals.0')(props)}, 0 0 0 4px ${themeGet(
              'colors.greens.1'
          )(props)}`
        : `0 0 0 2px ${themeGet('colors.teals.0')(props)}`,
    transform: props.selected ? `scale(1.05)` : 'scale(1)',
    transition: 'all 0.25s cubic-bezier(.1,.2,.75,.19)',
}));

const VideoCard = ({ fish, selected }) => {
    return (
        <StyledVideoCard
            src={fish.photo}
            height='122px'
            width='122px'
            alt={fish.commonName}
            selected={selected}
        />
    );
};

export default VideoCard;
