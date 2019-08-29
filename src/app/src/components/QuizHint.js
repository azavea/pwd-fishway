import React from 'react';
import { string } from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { Box } from 'rebass';
import { Text } from './custom-styled-components';
import { themeGet } from 'styled-system';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const slideIn = keyframes`
    0% {
        transform: translateX(100%) scale(1);
    }

    80% {
        transform: translateX(80%) scale(1.15);
    }
  
    100% {
        transform: translateX(0) scale(1);
    }
`;

const StyledQuizHint = styled(Box)`
    background: ${themeGet('colors.greens.2')};
    width: fit-content;
    position: fixed;
    right: 0;
    max-width: 32rem;
    text-align: left;
    text-indent: -1.5rem;
    bottom: ${themeGet('space.comfortable')};
    transform: translateX(100%);
    border-radius: 10px 0 0 10px;
    padding: ${themeGet('space.compact')} ${themeGet('space.compact')}
        ${themeGet('space.compact')} 2.5rem;
    animation: ${slideIn} 0.15s cubic-bezier(0.33, 0.1, 0.6, 0.84) 0.3s forwards;

    ${Text} {
        color: ${themeGet('colors.black')};
        margin-bottom: 0;
        font-weight: ${themeGet('fontWeights.semibold')};
    }
`;

const QuizHint = ({ hint }) => (
    <StyledQuizHint>
        <Text variant='base'>
            <FontAwesomeIcon icon={['far', 'exclamation-circle']} />
            &nbsp;
            {hint}
        </Text>
    </StyledQuizHint>
);

QuizHint.propTypes = {
    hint: string.isRequired,
};

export default QuizHint;
