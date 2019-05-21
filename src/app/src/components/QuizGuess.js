import React from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';
import { themeGet } from 'styled-system';

import Text from './Text';

import { QuizFish } from '../util/QuizFish';

const StyledQuizGuess = styled(Flex)`
    text-align: center;
    flex-direction: column;
`;

const Answer = styled(Flex)`
    flex-direction: column;
    text-align: center;
`;

const QuizGuess = ({ answer, guess }) => {
    const message =
        answer.commonName === guess.commonName
            ? 'CORRECT!'
            : 'Sorry, it was the:';

    return (
        <StyledQuizGuess>
            <Answer>
                {message}
                <img src={answer.picturePath} alt='Illustration of the fish' />
                <Text as='h2' variant='base'>
                    {answer.commonName}
                </Text>
                <Text as='h3' variant='xSmall'>
                    {answer.scientificName}
                </Text>
            </Answer>
            <Text as='h2' variant='xSmall'>
                {answer.hint}
            </Text>
        </StyledQuizGuess>
    );
};

QuizGuess.propTypes = {
    answer: QuizFish.isRequired,
    guess: QuizFish.isRequired,
};

export default QuizGuess;
