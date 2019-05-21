import React, { useState } from 'react';
import { Flex, Box } from 'rebass';
import { Heading, Text } from './custom-styled-components';
import styled from 'styled-components';
import { themeGet } from 'styled-system';

import { FISH_HIGHLIGHTS } from '../util/constants';

import Sidebar from './Sidebar';
import VideoCard from './VideoCard';

const StyledSeeTheFishway = styled(Flex)`
    height: 100%;
`;

const SeeTheFishwayTray = styled(Flex)`
    flex-direction: column;
    width: 100%;
`;

const VideoCardButton = styled.button`
    background: transparent;
    border: none;
    margin: 5px;

    &:focus {
        outline: 0;
    }
`;

const SeeTheFishway = () => {
    const [selectedFish, selectFish] = useState(FISH_HIGHLIGHTS[0]);

    const cards = FISH_HIGHLIGHTS.map(fish => (
        <VideoCardButton key={fish.timestamp} onClick={() => selectFish(fish)}>
            <VideoCard
                fish={fish}
                selected={
                    selectedFish.timestamp === fish.timestamp ? true : false
                }
            />
        </VideoCardButton>
    ));
    return (
        <StyledSeeTheFishway>
            <SeeTheFishwayTray>
                <Box>
                    <Heading as='h1'>See the Fishway</Heading>
                    <Text as='p' variant='large'>
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
                <Heading as='h2' variant='small'>
                    Highlight reel
                </Heading>
                <Text as='p'>
                    Check out some of the wildlife that scientists have caught
                    on tape over the years.
                </Text>
                <Flex flexWrap='wrap'>{cards}</Flex>
            </SeeTheFishwayTray>
            <Sidebar fish={selectedFish} />
        </StyledSeeTheFishway>
    );
};

export default SeeTheFishway;
