import React from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';
import { objectOf } from 'prop-types';
import { themeGet } from 'styled-system';

import Text from './Text';

import { QuizFish } from '../util/QuizFish';

const StyledQuizGuess = styled(Flex)`
    text-align: center;
    background: ${themeGet('colors.teals.0')};
    flex-direction: column;
`;

const Answer = styled(Flex)`
    flex-direction: column;
    text-align: center;
`;

const QuizGuess = props => {
    const { answer, guess } = props;

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
    answer: objectOf(QuizFish).isRequired,
    guess: objectOf(QuizFish).isRequired,
};

export default QuizGuess;
