import React from 'react';
import styled from 'styled-components';
import { Box, Heading, Text } from 'rebass';
import { themeGet } from 'styled-system';

const StyledClipSelect = styled(Box)`
    background: ${themeGet('colors.lightgray')};
`;

const ClipSelect = () => {
    return (
        <StyledClipSelect>
            <Heading as='h2' fontSize='2'>
                Highlight reel
            </Heading>
            <Text as='p' fontSize='0'>
                Check out some of the wildlife that scientists have caught on
                tape over the years.
            </Text>
        </StyledClipSelect>
    );
};

export default ClipSelect;
