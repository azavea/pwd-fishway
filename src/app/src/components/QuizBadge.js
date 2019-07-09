import React from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';
import { themeGet } from 'styled-system';

import Text from './Text';
import Timer from './Timer';

const StyledQuizBadge = styled(Flex)`
    position: absolute;
    background-image: linear-gradient(
        to right,
        ${themeGet('colors.teals.0')} 20%,
        ${themeGet('colors.teals.1')} 50%,
        ${themeGet('colors.teals.2')} 100%
    );
    opacity: 11%;
    right: 0px;
    text-align: center;
    width: 300px;
    height: 70px;
    justify-content: space-evenly;
`;

const QuizBadgeBox = styled(Flex)`
    width: 100%;
    align-items: center;
`;

const QuizBadgeText = styled(Text)`
    margin-bottom: 0;
`;

const QuizBadge = ({ dispatch, score }) => {
    return (
        <StyledQuizBadge>
            <QuizBadgeBox>
                <QuizBadgeText variant='large'>{score}</QuizBadgeText>
                <QuizBadgeText>&nbsp;points</QuizBadgeText>
            </QuizBadgeBox>
            <QuizBadgeBox>
                <QuizBadgeText variant='large'>
                    <Timer dispatch={dispatch} />
                </QuizBadgeText>
                <QuizBadgeText>&nbsp;mins</QuizBadgeText>
            </QuizBadgeBox>
        </StyledQuizBadge>
    );
};

export default QuizBadge;
