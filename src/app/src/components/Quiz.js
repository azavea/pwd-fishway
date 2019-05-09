import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'rebass';
import { themeGet } from 'styled-system';

import QuizNavbar from './QuizNavbar';
import QuizGuess from './QuizGuess';
import Sidebar from './Sidebar';

import { QUIZ_FISH } from '../util/constants';

const QuizContainer = styled(Flex)`
    text-align: center;
    background: ${themeGet('colors.teals.0')};
`;

const Quiz = props => {
    return (
        <Box>
            <QuizNavbar dispatch={props.dispatch} />
            <QuizContainer>
                <Sidebar />
                <QuizGuess answer={QUIZ_FISH[0]} guess={QUIZ_FISH[0]} />
            </QuizContainer>
        </Box>
    );
};

export default Quiz;
