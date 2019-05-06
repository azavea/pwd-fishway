import React from 'react';
import { Flex, Box, Heading, Text } from 'rebass';
import Sidebar from './Sidebar.js';
import ClipSelect from './ClipSelect.js';

const SeeTheFishway = () => {
    return (
        <div>
            <Flex>
                <Box>
                    <Heading as='h1' fontSize='2' mb='3'>
                        See the Fishway
                    </Heading>
                    <Text as='p' fontSize='1'>
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
        </div>
    );
};

export default SeeTheFishway;
