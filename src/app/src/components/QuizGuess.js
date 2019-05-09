import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';
import { themeGet } from 'styled-system';

const StyledQuizGuess = styled(Box)`
    text-align: center;
    background: ${themeGet('colors.teals.0')};
`;

const QuizGuess = props => {
    const { answer, guess } = props;

    const message =
        answer.commonName === guess.commonName
            ? 'CORRECT!'
            : 'Sorry, it was the:';

    return (
        <StyledQuizGuess>
            {message}
            <img src={answer.picturePath} alt='Illustration of the fish' />
            {answer.commonName}
            {answer.scientificName}
            {answer.hint}
        </StyledQuizGuess>
    );
};

QuizGuess.propTypes = {
    answer: Object.isRequired,
    guess: Object.isRequired,
};

export default QuizGuess;
