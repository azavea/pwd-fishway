import React from 'react';
import { Box, Button, Flex } from 'rebass';
import styled from 'styled-components';
import { themeGet } from 'styled-system';

import { Heading, Text } from './custom-styled-components';
import MeetTheFishModal from './MeetTheFishModal';

const StyledMeetTheFish = styled(Flex)`
    justify-content: center;
    text-align: center;
    background: ${themeGet('colors.teals.1')};
`;

const MeetTheFish = () => {
    return (
        <StyledMeetTheFish>
            <Box width={1 / 2}>
                <Heading as='h1'>Meet the Fish</Heading>
                <Text as='p' variant='large'>
                    Did you know over 48 species of fish live in the waterways
                    of Philadelphia? Here are 24 of the most common species.
                </Text>
                <MeetTheFishModal index={0}>
                    <Button>Meet a fish!</Button>
                </MeetTheFishModal>
            </Box>
        </StyledMeetTheFish>
    );
};

export default MeetTheFish;
