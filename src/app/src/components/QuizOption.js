import { bool } from 'prop-types';
import React from 'react';
import { Flex } from 'rebass';
import styled, { keyframes } from 'styled-components';

import { Fish } from '../util/Fish';
import FishNames from './FishNames';

const fishBounce = keyframes`
    0% {
        transform: translateY(0);
    }
  
    50% {
        transform: translateY(3%);
    }
  
    100% {
        transform: translateY(0%);
    }
`;

const StyledQuizOption = styled(Flex)`
    flex-direction: column;
    margin: 2%;

    img {
        margin: 0 auto 2rem;
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
        filter: ${props =>
            props.showImage ? null : 'contrast(0) brightness(0.3)'};
        opacity: ${props =>
            props.showImage && !props.shadeImage ? null : '0.3'};
        mix-blend-mode: ${props => (props.showImage ? 'normal' : 'multiply')};
        animation-name: ${fishBounce};
        animation-duration: 4s;
        animation-iteration-count: infinite;
        will-change: transform, opacity;
        transition: opacity 0.45s ease-in;
    }
`;

const QuizOption = ({ fish, showImage, shadeImage, ...props }) => {
    return (
        <StyledQuizOption
            showImage={showImage}
            shadeImage={shadeImage}
            {...props}
        >
            <img src={fish.picturePath} alt='Illustration of the fish' />
            <FishNames
                commonName={fish.commonName}
                scientificName={fish.scientificName}
            />
        </StyledQuizOption>
    );
};

QuizOption.propTypes = {
    fish: Fish.isRequired,
    showImage: bool.isRequired,
    shadeImage: bool.isRequired,
};

export default QuizOption;
