import React from 'react';
import { func } from 'prop-types';
import styled from 'styled-components';
import { Flex, Button, Text } from 'rebass';

import { hideQuiz } from '../actions';

const StyledQuizNavbar = styled(Flex)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    background-color: #296882;
    padding: 0 10px 0 30px;
`;

const QuizNavbar = props => {
    const { dispatch } = props;
    return (
        <StyledQuizNavbar>
            <Text as='h5' fontSize='0'>
                TEST YOUR SKILLS
            </Text>
            <Button onClick={() => dispatch(hideQuiz())}>x</Button>
        </StyledQuizNavbar>
    );
};

QuizNavbar.propTypes = {
    dispatch: func.isRequired,
};

export default QuizNavbar;
