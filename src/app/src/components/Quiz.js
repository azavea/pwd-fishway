import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'rebass';
import { themeGet } from 'styled-system';

import QuizNavbar from './QuizNavbar';
import Sidebar from './Sidebar';

const StyledQuiz = styled(Box)``;

const QuizContainer = styled(Flex)`
    text-align: center;
    background: ${themeGet('colors.teals.0')};
`;

const Quiz = props => {
    return (
        <StyledQuiz>
            <QuizNavbar dispatch={props.dispatch} />
            <QuizContainer>
                <Sidebar />
            </QuizContainer>
        </StyledQuiz>
    );
};

export default Quiz;
