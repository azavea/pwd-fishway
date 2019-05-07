import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'rebass';

import QuizNavbar from './QuizNavbar';

const StyledQuizView = styled(Box)``;

const QuizContainer = styled(Flex)`
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const QuizView = props => {
    return (
        <StyledQuizView>
            <QuizNavbar dispatch={props.dispatch} />
            <QuizContainer />
        </StyledQuizView>
    );
};

export default QuizView;
