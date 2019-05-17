import React, { useState } from 'react';
import styled from 'styled-components';
import { Flex, Box, Button } from 'rebass';
import { themeGet } from 'styled-system';

import QuizNavbar from './QuizNavbar';
import QuizGuess from './QuizGuess';
import QuizSidebar from './QuizSidebar';

import { QUIZ_FISH, GUESS_MESSAGE_TIME } from '../util/constants';

const QuizContainer = styled(Flex)`
    text-align: center;
    background: ${themeGet('colors.teals.0')};
`;

const QuizBody = styled(Box)`
    background: ${themeGet('colors.teals.2')};
`;

const Quiz = props => {
    const [answer] = useState(QUIZ_FISH[0]);
    const [guess, setGuess] = useState(null);

    function checkGuess(fish) {
        setGuess(fish);
        setTimeout(() => setGuess(null), GUESS_MESSAGE_TIME);
    }

    const quizState =
        guess !== null ? (
            <QuizGuess answer={answer} guess={guess} />
        ) : (
            <QuizContainer>
                <QuizSidebar fish={QUIZ_FISH[0]} />
                <QuizBody>
                    <Button onClick={event => checkGuess(QUIZ_FISH[0])}>
                        Guess correctly
                    </Button>
                    <Button onClick={event => checkGuess(QUIZ_FISH[1])}>
                        Guess incorrectly
                    </Button>
                </QuizBody>
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
