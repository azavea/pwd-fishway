import React from 'react';
import { arrayOf, func, number, bool } from 'prop-types';
import styled from 'styled-components';
import { Box, Flex } from 'rebass';
import { Heading, Button, buttonWidth } from './custom-styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { themeGet } from 'styled-system';

import { hideQuiz } from '../actions';
import { QuizResult } from '../util/QuizResult';

const StyledQuizNavbar = styled(Flex)`
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 1;
    width: 100%;
    align-items: center;
    padding: 0 ${themeGet('space.comfortable')};
    height: ${themeGet('navHeight')};
    border-bottom: 1px solid rgba(256, 256, 256, 0.2);
    background: linear-gradient(
        -90deg,
        ${themeGet('colors.teals.1')} 0%,
        ${themeGet('colors.teals.2')} 100%
    );
`;

const Result = styled(Box)`
    flex: none;
    padding: 0 1rem;
    paint-order: stroke;
    stroke-width: ${props => props.theme.sw};
    stroke: ${props => props.theme.s};
    color: ${props => props.theme.c};
    transition: stroke-width 0, stroke 0.35s ease-out, color 0.35s ease-out;

    .fa-fish {
        stroke-width: ${props => props.theme.sw};
        stroke: ${props => props.theme.s};
        color: ${props => props.theme.c};
        transition: stroke-width 0, stroke 0.35s ease-out, color 0.35s ease-out;
    }
`;

const theme = {
    sw: null,
    s: null,
    c: '#052231',
};

const currentTheme = {
    sw: '50px',
    s: '#CEE007',
    c: '#052231',
};

const correctTheme = {
    sw: '50px',
    s: 'rgba(49, 86, 105, 0.8)',
    c: 'rgba(191, 204, 94, 0.4)',
};

const incorrectTheme = {
    sw: '50px',
    s: 'rgba(49, 86, 105, 0.8)',
    c: 'rgba(255, 255, 255, 0.38)',
};

const FishIcon = styled(Box)`
    position: relative;

    .icon {
        stroke-width: 0;
        position: absolute;
        transform: translateX(-30%);
    }
`;

const CorrectIcon = styled(FishIcon)`
    .icon {
        color: ${themeGet('colors.greens.2')};
        top: -0.3rem;
        left: 57%;
    }
`;

const IncorrectIcon = styled(FishIcon)`
    .icon {
        color: ${themeGet('colors.white')};
        top: 0;
        left: 54%;
    }
`;

const CloseButtonPlaceholder = styled(Box)`
    width: ${buttonWidth};
`;

const QuizNavbar = props => {
    const { dispatch, question, results, isQuestionActive } = props;

    const check = (
        <CorrectIcon>
            <FontAwesomeIcon
                icon={['fal', 'check']}
                size='3x'
                className='icon'
            />
        </CorrectIcon>
    );
    const times = (
        <IncorrectIcon>
            <FontAwesomeIcon
                icon={['fal', 'times']}
                size='3x'
                className='icon'
            />
        </IncorrectIcon>
    );

    const icons = [0, 1, 2, 3, 4].map(idx => {
        const result = results[idx];
        const isCurrent = question === idx;
        const correct = result && result.numWrong < 2;
        const incorrect = result && !correct;
        const setIconTheme = () => {
            if (isCurrent) {
                return currentTheme;
            } else if (correct) {
                return correctTheme;
            } else if (incorrect) {
                return incorrectTheme;
            } else {
                return theme;
            }
        };
        return (
            <Result
                key={idx}
                current={isCurrent}
                correct={correct}
                incorrect={incorrect}
                theme={setIconTheme()}
            >
                {correct && !isCurrent && check}
                {incorrect && !isCurrent && times}
                <FontAwesomeIcon icon={['fas', 'fish']} size='3x' />
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
            <Heading as='h1' variant='xSmall'>
                Test your skills
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
