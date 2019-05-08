import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'rebass';
import { themeGet } from 'styled-system';

import QuizNavbar from './QuizNavbar';

const StyledQuiz = styled(Box)``;

const QuizContainer = styled(Flex)`
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${themeGet('colors.teals.0')};
`;

const Quiz = props => {
    return (
        <StyledQuiz>
            <QuizNavbar dispatch={props.dispatch} />
            <QuizContainer />
        </StyledQuiz>
    );
};

export default Quiz;
