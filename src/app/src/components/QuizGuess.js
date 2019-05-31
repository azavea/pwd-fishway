import { bool } from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';
import { themeGet } from 'styled-system';

import Text from './Text';
import Heading from './Heading';

import { QuizFish } from '../util/QuizFish';

const StyledQuizGuess = styled(Flex)`
    text-align: center;
    flex-direction: column;
`;

const Answer = styled.div`
    text-align: center;
`;

const Circle = styled.div`
    width: 400px;
    height: 400px;
    max-width: 60%;
    position: absolute;
    top: 60%;
    left: 50%;
    background-color: ${themeGet('colors.teals.2')};
    transform: translate(-50%, -50%);
    border-radius: 400px;
    z-index: 1;
`;

const Message = styled(Heading)`
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
`;

const CorrectMessage = styled(Message)`
    color: ${themeGet('colors.greens.3')};
    font-weight: 900;
    font-size: 8.5rem;
    top: 40%;
`;

const FishImage = styled.img`
    width: auto;
    height: auto;
    max-width: 60%;
    max-height: 55%;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
`;

const CaptionText = styled(Flex)`
    flex-direction: column;
    position: absolute;
    top: 85%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
`;

const QuizGuess = ({ answer, correct }) => {
    const correctText = <CorrectMessage>Correct!</CorrectMessage>;
    const incorrectText = (
        <Message variant='small' fontStyle='italic' opacity={0.7}>
            Sorry, it was the:
        </Message>
    );
    const message = correct ? correctText : incorrectText;

    return (
        <StyledQuizGuess>
            {message}
            <Answer>
                <Circle />
                <FishImage
                    src={answer.picturePath}
                    alt='Illustration of the fish'
                />
                <CaptionText>
                    <Text as='h2' variant='base'>
                        {answer.commonName}
                    </Text>
                    <Text as='h3' variant='xSmall' fontStyle='italic'>
                        {answer.scientificName}
                    </Text>
                </CaptionText>
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
