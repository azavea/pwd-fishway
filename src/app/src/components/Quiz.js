import React, { useState } from 'react';
import styled from 'styled-components';
import { Flex, Box, Button } from 'rebass';
import { themeGet } from 'styled-system';

import QuizNavbar from './QuizNavbar';
import QuizGuess from './QuizGuess';
import Sidebar from './Sidebar';

import { QUIZ_FISH, GUESS_MESSAGE } from '../util/constants';

const QuizContainer = styled(Flex)`
    text-align: center;
    background: ${themeGet('colors.teals.0')};
`;

const Quiz = props => {
    const [answer] = useState(QUIZ_FISH[0]);
    const [guess, setGuess] = useState(null);

    function checkGuess(fish) {
        setGuess(fish);
        setTimeout(() => setGuess(null), GUESS_MESSAGE);
    }

    const quizState = guess ? (
        <QuizGuess answer={answer} guess={guess} />
    ) : (
        <QuizContainer>
            <Sidebar />
            <Button onClick={event => checkGuess(QUIZ_FISH[0])}>
                Guess correctly
            </Button>
            <Button onClick={event => checkGuess(QUIZ_FISH[1])}>
                Guess incorrectly
            </Button>
        </QuizContainer>
    );

    return (
        <Box>
            <QuizNavbar dispatch={props.dispatch} />
            {quizState}
        </Box>
    );
};

export default Quiz;
