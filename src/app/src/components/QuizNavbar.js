import React from 'react';
import { arrayOf, func, number, bool } from 'prop-types';
import styled from 'styled-components';
import { Box, Flex } from 'rebass';
import { Heading, Button, buttonWidth } from './custom-styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { hideQuiz } from '../actions';
import { QuizResult } from '../util/QuizResult';

const StyledQuizNavbar = styled(Flex)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    background-color: #296882;
    padding: 0 10px 0 30px;
`;

const Result = styled(Box)`
    flex: none;
    border-bottom: ${props => (props.current ? '1px solid green' : null)};
`;

const CloseButtonPlaceholder = styled(Box)`
    width: ${buttonWidth};
`;

const QuizNavbar = props => {
    const { dispatch, question, results, isQuestionActive } = props;

    const icons = [0, 1, 2, 3, 4].map(idx => {
        const result = results[idx];
        const correct = result && result.numWrong < 2;
        return (
            <Result key={idx} current={question === idx} correct={correct}>
                <FontAwesomeIcon icon={['fas', 'fish']} />
            </Result>
        );
    });

    // Without a close button, still render a placeholder element
    // to maintain quiz navbar spacing
    const closeButton = isQuestionActive ? (
        <Button variant='close' onClick={() => dispatch(hideQuiz())}>
            <FontAwesomeIcon icon={['fal', 'times']} />
        </Button>
    ) : (
        <CloseButtonPlaceholder />
    );

    return (
        <StyledQuizNavbar>
            <Heading as='h1' variant='xSmall' fontSize='0'>
                TEST YOUR SKILLS
            </Heading>
            <Flex>{icons}</Flex>
            {closeButton}
        </StyledQuizNavbar>
    );
};

QuizNavbar.propTypes = {
    dispatch: func.isRequired,
    question: number.isRequired,
    results: arrayOf(QuizResult).isRequired,
    isQuestionActive: bool.isRequired,
};

export default QuizNavbar;
