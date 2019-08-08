import { bool } from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'rebass';
import { themeGet } from 'styled-system';
import { Heading, Text } from './custom-styled-components';

import { QuizFish } from '../util/QuizFish';
import FishNames from './FishNames';

const StyledQuizGuess = styled(Box)`
    height: calc(100vh - ${themeGet('navHeight')});
    bottom: 0;
    position: absolute;
    left: 0;
    right: 0;
    background-image: linear-gradient(
        -180deg,
        ${themeGet('colors.teals.2')} 0%,
        ${themeGet('colors.teals.3')} 100%
    );
`;

const Answer = styled.div`
    text-align: center;
`;

const Circle = styled.div`
    width: 650px;
    height: 650px;
    position: absolute;
    top: 50%;
    left: 50%;
    background-image: linear-gradient(
        to bottom,
        ${themeGet('colors.teals.6')},
        ${themeGet('colors.black')}
    );
    transform: translate(-50%, -50%);
    border-radius: 400px;
    z-index: 1;
    opacity: 0.25;
`;

const Message = styled(Heading)`
    position: absolute;
    top: 27%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    opacity: 0.7;
`;

const CorrectMessage = styled(Message)`
    color: ${themeGet('colors.greens.1')};
    top: 32%;
    opacity: 0.8;
`;

const FishContainer = styled(Flex)`
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    position: absolute;
    bottom: 25%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
`;

const FishImage = styled.img`
    width: auto;
    max-width: 42rem;
    height: auto;
    max-height: 20rem;
`;

const CaptionText = styled(Box)`
    margin-top: ${themeGet('space.normal')};
    transform: scale(1.25);
`;

const QuizGuess = ({ answer, correct }) => {
    const correctText = (
        <CorrectMessage variant='xxlarge'>Correct!</CorrectMessage>
    );
    const incorrectText = (
        <Message variant='base' fontStyle='italic'>
            Sorry, it was the:
        </Message>
    );
    const message = correct ? correctText : incorrectText;

    return (
        <StyledQuizGuess>
            {message}
            <Answer>
                <Circle />
                <FishContainer>
                    <FishImage
                        src={answer.largePicturePath}
                        alt='Illustration of the fish'
                    />
                    <CaptionText>
                        <FishNames
                            commonName={answer.commonName}
                            scientificName={answer.scientificName}
                        />
                    </CaptionText>
                </FishContainer>
            </Answer>
            <Text as='h2' variant='xSmall'>
                {answer.hint}
            </Text>
        </StyledQuizGuess>
    );
};

QuizGuess.propTypes = {
    answer: QuizFish.isRequired,
    correct: bool.isRequired,
};

export default QuizGuess;
