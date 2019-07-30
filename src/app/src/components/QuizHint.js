import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import { Box } from 'rebass';
import { Text } from './custom-styled-components';
import { themeGet } from 'styled-system';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledQuizHint = styled(Box)`
    background: ${themeGet('colors.greens.3')};
    text-align: center;
    width: fit-content;
    margin-left: auto;
`;

const QuizHint = ({ hint }) => (
    <StyledQuizHint>
        <Text variant='small'>
            <FontAwesomeIcon icon={['fas', 'exclamation-circle']} />
            &nbsp;
            {hint}
        </Text>
    </StyledQuizHint>
);

QuizHint.propTypes = {
    hint: string.isRequired,
};

export default QuizHint;
