import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';
import { Heading, Text } from '../src';
import { themeGet } from 'styled-system';

const StyledClipSelect = styled(Box)`
    background: ${themeGet('colors.lightgray')};
`;

const ClipSelect = () => {
    return (
        <StyledClipSelect>
            <Heading as='h2' variant='small'>
                Highlight reel
            </Heading>
            <Text as='p'>
                Check out some of the wildlife that scientists have caught on
                tape over the years.
            </Text>
        </StyledClipSelect>
    );
};

export default ClipSelect;
