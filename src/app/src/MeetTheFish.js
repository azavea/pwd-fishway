import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'rebass';
import { Heading, Text } from '../src';
import { themeGet } from 'styled-system';

const StyledMeetTheFish = styled(Flex)`
    justify-content: center;
    text-align: center;
    background: ${themeGet('colors.teals.1')};
`;

const MeetTheFish = () => {
    return (
        <StyledMeetTheFish>
            <Box width={1 / 2}>
                <Heading as='h1' fontSize='2' mb='3'>
                    Meet the Fish
                </Heading>
                <Text as='p' fontSize='1' variant='big'>
                    Did you know over 48 species of fish live in the waterways
                    of Philadelphia? Here are 24 of the most common species.
                </Text>
            </Box>
        </StyledMeetTheFish>
    );
};

export default MeetTheFish;
