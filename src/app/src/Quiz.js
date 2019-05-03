import React from 'react';
import styled from 'styled-components';
import { Flex, Box, Heading, Text, Button } from 'rebass';

const StyledQuiz = styled(Flex)`
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Quiz = () => {
    return (
        <StyledQuiz>
            <Box width={1 / 2} mb='4'>
                <Heading as='h1' fontSize='3' mb='4'>
                    Test your skills
                </Heading>
                <Text as='p' fontSize='1'>
                    Aquatic biologists need to identify each fish that moves
                    through the fishway. This can be tough, because fish swim
                    fast and are hard to see!
                </Text>
                <Text as='p'>
                    Watch the clip of fish moving through the fishway and match
                    it to the correct fish. Work quickly and carefully to get
                    the highest score!
                </Text>
            </Box>
            <Button>Play</Button>
        </StyledQuiz>
    );
};

export default Quiz;
