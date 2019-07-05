import React, { useState } from 'react';
import update from 'immutability-helper';
import { Flex, Box } from 'rebass';
import { themeGet } from 'styled-system';
import { Heading, Text } from './custom-styled-components';
import styled from 'styled-components';

import { FISH_HIGHLIGHTS, LIVE_FEED_MOCK_FISH } from '../util/constants';

import Sidebar from './Sidebar';
import VideoCard from './VideoCard';

const StyledSeeTheFishway = styled(Flex)`
    height: 100%;
`;

const PageTitle = styled(Heading)`
    margin-bottom: ${themeGet('space.small')};
`;

const SeeTheFishwayTray = styled(Flex)`
    flex-direction: column;
    width: 100%;
    padding: ${themeGet('space.comfortable')};
`;

const Subtitle = styled(Heading)`
    margin-top: ${themeGet('space.medium')};
    margin-bottom: 0;
`;

const VideoCardButtonContainer = styled(Flex)`
    flex-wrap: wrap;
    margin-top: ${themeGet('space.medium')};

    button {
        flex: 0 0 14.15%;
        margin: 0 3% ${themeGet('space.medium')} 0;
        padding: 0;
    }

    button:nth-child(6n) {
        margin: 0 0 ${themeGet('space.medium')};
    }

    img {
        width: 100%;
    }
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
    let fishList = FISH_HIGHLIGHTS;

    // Fish migration season is June through August
    const currentMonth = new Date().getMonth();
    if (currentMonth > 5 && currentMonth < 8) {
        // TODO (Issue #77): check if the stream works else don't show the option
        fishList = update(FISH_HIGHLIGHTS, {
            $unshift: [LIVE_FEED_MOCK_FISH],
        });
    }

    const [selectedFish, selectFish] = useState(fishList[0]);

    const cards = fishList.map(fish => (
        <VideoCardButton key={fish.notes} onClick={() => selectFish(fish)}>
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
                    <PageTitle as='h1'>See the Fishway</PageTitle>
                    <Text as='p' variant='large'>
                        In Springtime, fish travel upriver to their spawning
                        grounds to mate and lay their eggs — this is when the
                        fishway is bursting with activity. Biologists monitor
                        the fish moving up and down the river.
                    </Text>
                </Box>
                <Subtitle as='h2' variant='small'>
                    Highlight reel
                </Subtitle>
                <Text as='p'>
                    Check out some of the wildlife that scientists have caught
                    on tape over the years.
                </Text>
                <VideoCardButtonContainer>{cards}</VideoCardButtonContainer>
            </SeeTheFishwayTray>
            <Sidebar fish={selectedFish} />
        </StyledSeeTheFishway>
    );
};

export default SeeTheFishway;
