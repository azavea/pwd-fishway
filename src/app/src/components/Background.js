import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';
import { themeGet } from 'styled-system';

const StyledBackground = styled(Box)`
    background: linear-gradient(
        to bottom,
        ${themeGet('colors.lightblues.0')} 0%,
        ${themeGet('colors.lightblues.2')} 10% 15%,
        ${themeGet('colors.teals.0')} 15%,
        ${themeGet('colors.teals.1')} 25%,
        ${themeGet('colors.teals.2')} 45%,
        ${themeGet('colors.teals.3')} 65%,
        ${themeGet('colors.teals.4')} 85%,
        ${themeGet('colors.teals.5')} 100%
    );
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
`;

const Background = props => {
    return <StyledBackground />;
};

export default Background;
