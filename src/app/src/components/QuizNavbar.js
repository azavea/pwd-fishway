import React from 'react';
import styled from 'styled-components';
import { Flex, Button, Text } from 'rebass';

import { hideQuiz } from '../actions';

const StyledQuizNavbar = styled(Flex)`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50px
    background-color: #296882;
    padding: 0 10px 0 30px;
`;

const CloseButton = styled(Button)``;

const QuizNavbar = props => {
    const { dispatch } = props;
    return (
        <StyledQuizNavbar>
            <Text as='h5' fontSize='0'>
                TEST YOUR SKILLS
            </Text>
            <CloseButton onClick={() => dispatch(hideQuiz())}>x</CloseButton>
        </StyledQuizNavbar>
    );
};

export default QuizNavbar;
