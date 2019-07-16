import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';
import { Heading } from './custom-styled-components';
import { themeGet } from 'styled-system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledBox = styled(Box)`
    position: relative;
`;

const StyledVideoCard = styled('img')(props => ({
    borderRadius: '4px',
    width: '100%',
    height: 'auto',
    boxShadow: props.selected
        ? `0 0 0 1px ${themeGet('colors.teals.0')(props)}, 0 0 0 4px ${themeGet(
              'colors.greens.1'
          )(props)}`
        : `0 0 0 2px ${themeGet('colors.teals.0')(props)}`,
    transform: props.selected ? `scale(1.05)` : 'scale(1)',
    transition: 'all 0.25s cubic-bezier(.1,.2,.75,.19)',
}));

const StyledLiveFeedHeading = styled(Heading)`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    text-shadow: 0 0 4px rgba(0, 0, 0, 0.75);
    z-index: 1;
    white-space: nowrap;
    text-align: center;

    svg {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
`;

const VideoCard = ({ fish, selected }) => {
    const liveVideoHeading = (
        <StyledLiveFeedHeading as='span' variant='xSmall'>
            <FontAwesomeIcon
                icon={['fas', 'video']}
                pull='left'
                size='4x'
                opacity='0.3'
            />
            Live Feed
        </StyledLiveFeedHeading>
    );
    return (
        <StyledBox>
            {fish.isLiveFeed && liveVideoHeading}
            <StyledVideoCard
                src={fish.photo}
                alt={fish.commonName}
                width='122'
                height='122'
                selected={selected}
            />
        </StyledBox>
    );
};

export default VideoCard;
