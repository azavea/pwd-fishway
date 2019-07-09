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

const Badge = styled(Flex)`
    width: 100%;
    align-items: center;
`;

const BadgeText = styled(Text)`
    margin-bottom: 0;
`;

const QuizBadge = ({ dispatch, score }) => {
    return (
        <StyledQuizBadge>
            <Badge>
                <BadgeText variant='large'>{score}</BadgeText>
                <BadgeText>&nbsp;points</BadgeText>
            </Badge>
            <Badge>
                <BadgeText variant='large'>
                    <Timer dispatch={dispatch} />
                </BadgeText>
                <BadgeText>&nbsp;mins</BadgeText>
            </Badge>
        </StyledQuizBadge>
    );
};

export default QuizBadge;
