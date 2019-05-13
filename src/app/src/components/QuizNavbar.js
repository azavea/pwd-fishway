import React from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';
import { Heading, Button } from './custom-styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
            <Heading as='h1' variant='xSmall' fontSize='0'>
                TEST YOUR SKILLS
            </Heading>
            <Button variant='close' onClick={() => dispatch(hideQuiz())}>
                <FontAwesomeIcon icon={['fal', 'times']} />
            </Button>
        </StyledQuizNavbar>
    );
};

export default QuizNavbar;
