import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, Flex } from 'rebass';
import { themeGet } from 'styled-system';

import QuizNavbar from './QuizNavbar';
import QuizGuess from './QuizGuess';
import QuizQuestion from './QuizQuestion';
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
    const [results, setResults] = useState(null);

    function checkResults(results) {
        setResults(results);
        setTimeout(() => setResults(null), GUESS_MESSAGE_TIME);
    }

    const correctGuess = results !== null && results.numWrong < 2;
    const quizState =
        results !== null ? (
            <QuizGuess answer={answer} correct={correctGuess} />
        ) : (
            <QuizContainer>
                <QuizSidebar fish={answer} width={1 / 5} />
                <QuizBody width={4 / 5}>
                    <QuizQuestion
                        answer={answer}
                        choices={[QUIZ_FISH[0], QUIZ_FISH[1], QUIZ_FISH[2]]}
                        onDone={checkResults}
                    />
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
