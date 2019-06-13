import { bool } from 'prop-types';
import React from 'react';
import { Flex } from 'rebass';
import styled from 'styled-components';

import { QuizFish } from '../util/QuizFish';
import FishNames from './FishNames';

const StyledQuizOption = styled(Flex)`
    flex-direction: column;

    img {
        margin: auto;
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
        filter: ${props =>
            props.showImage ? null : 'contrast(0) brightness(0.3)'};
        opacity: ${props =>
            props.showImage && !props.shadeImage ? null : '0.5'};
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
    fish: QuizFish.isRequired,
    showImage: bool.isRequired,
    shadeImage: bool.isRequired,
};

export default QuizOption;
