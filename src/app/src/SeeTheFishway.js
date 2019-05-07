import React from 'react';
import { Flex, Box } from 'rebass';
import { Heading, Text } from '../src';
import Sidebar from './Sidebar.js';
import ClipSelect from './ClipSelect.js';
import styled from 'styled-components';
import { themeGet } from 'styled-system';

const StyledSeeTheFishway = styled.div`
    height: 100%;
    background: ${themeGet('colors.teals.2')};
`;

const SeeTheFishway = () => {
    return (
        <StyledSeeTheFishway>
            <Flex>
                <Box>
                    <Heading as='h1' fontSize='2' mb='3'>
                        See the Fishway
                    </Heading>
                    <Text as='p' fontSize='1' variant='big'>
                        During the Spring migration, a video camera transmits
                        live images to this exhibit, and to aquatic biologists.
                    </Text>
                    <Text as='p'>
                        Biologists monitor fish moving up and down the river. In
                        Springtime, fish travel upriver to their spawning
                        grounds, to mate and lay eggs. This is when the Fish
                        Ladder is most active.
                    </Text>
                </Box>
                <Sidebar />
            </Flex>
            <ClipSelect />
        </StyledSeeTheFishway>
    );
};

export default SeeTheFishway;
