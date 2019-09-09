import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bool } from 'prop-types';
import { Flex, Box } from 'rebass';
import { themeGet } from 'styled-system';
import { Heading, Text } from './custom-styled-components';
import styled from 'styled-components';

import { FISH_HIGHLIGHTS } from '../util/constants';

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
        flex: 0 0 17%;
        margin: 0 3% ${themeGet('space.medium')} 0;
        padding: 0;
    }

    button:nth-child(5n) {
        margin: 0 0 ${themeGet('space.medium')};
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

const SeeTheFishway = ({ showConnectionError }) => {
    let fishList = FISH_HIGHLIGHTS;

    // Fish migration season is June through August
    /*

    **********************************************************
    Uncomment this section and update imports to reinstate the
    live feed feature. Pending the public IP Axis camera
    installation at the Fishway.

    TODO: https://github.com/azavea/pwd-fishway/issues/122
    **********************************************************

    const currentMonth = new Date().getMonth();
    if (
        currentMonth > 5 &&
        currentMonth < 8 &&
        (navigator.onLine || showConnectionError)
    ) {
        fishList = update(FISH_HIGHLIGHTS, {
            $unshift: [LIVE_FEED_MOCK_FISH],
        });
    }
    */

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
                <Box width={880}>
                    <PageTitle as='h1'>See the Fishway</PageTitle>
                    <Text as='p' variant='large'>
                        During the Spring migration, the river becomes a living
                        highway for fish and other aquatic species. A video
                        camera transmits live images to this exhibit, and to
                        aquatic biologists for real-time monitoring.
                    </Text>
                    <Text as='p'>
                        Biologists study and document fish movement up and down
                        the river. In Springtime, fish travel upriver to their
                        spawning grounds, to mate and lay eggs. This is when the
                        Fish Ladder is most active.
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

SeeTheFishway.propTypes = {
    showConnectionError: bool.isRequired,
};

function mapStateToProps(state) {
    return {
        showConnectionError: state.showConnectionError,
    };
}

export default connect(mapStateToProps)(SeeTheFishway);
