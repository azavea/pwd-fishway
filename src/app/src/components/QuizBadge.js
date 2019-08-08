import React from 'react';
import styled from 'styled-components';
import { Box, Flex } from 'rebass';
import { themeGet } from 'styled-system';

import { Text } from './custom-styled-components';
import Timer from './Timer';
import QuizMedallion from './QuizMedallion';

const StyledQuizBadge = styled(Flex)`
    position: absolute;
    overflow: visible;
    z-index: 1;
    right: 0px;
    width: 350px;
    padding: 0 2rem 0 5rem;
    height: 70px;
    justify-content: space-evenly;
`;

const Background = styled(Box)`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(
        to right,
        ${themeGet('colors.teals.0')} 20%,
        ${themeGet('colors.teals.1')} 50%,
        ${themeGet('colors.teals.2')} 100%
    );
    clip-path: polygon(100% 1%, 100% 100%, 15% 100%, 0 0);
`;

const Badge = styled(Flex)`
    width: 100%;
    align-items: center;
    position: relative;
`;

const BadgeContent = styled(Flex)`
    align-items: baseline;
    opacity: 1;
    z-index: 1;
`;

const BadgeValue = styled(Text)`
    opacity: 1;
    text-align: right;
    font-variant-numeric: tabular-nums;
`;

const BadgeLabel = styled(Text)`
    font-weight: ${themeGet('fontWeights.semibold')};
    opacity: 0.7;
`;

const QuizBadge = ({ dispatch, score, pointsGained }) => {
    const medallion = <QuizMedallion value={pointsGained} />;

    return (
        <StyledQuizBadge>
            <Badge>
                {pointsGained > 0 && medallion}
                <BadgeContent>
                    <BadgeValue as='span' variant='large'>
                        {score}
                    </BadgeValue>
                    <BadgeLabel as='span' variant='small'>
                        &nbsp;points
                    </BadgeLabel>
                </BadgeContent>
            </Badge>
            <Badge>
                <BadgeContent>
                    <BadgeValue as='span' variant='large'>
                        <Timer dispatch={dispatch} />
                    </BadgeValue>
                    <BadgeLabel as='span' variant='small'>
                        &nbsp;mins
                    </BadgeLabel>
                </BadgeContent>
            </Badge>
            <Background />
        </StyledQuizBadge>
    );
};

export default QuizBadge;
