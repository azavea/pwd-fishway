import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';
import { Text } from './custom-styled-components';
import { themeGet } from 'styled-system';
import moment from 'moment';

import { HighlightFish } from '../util/HighlightFish';

import VideoPlayer from './VideoPlayer';
import FishNames from './FishNames';

const StyledSidebar = styled(Box)`
    background: ${themeGet('colors.teals.5')};
    text-align: center;
    width: 100%;
`;

const Sidebar = ({ fish }) => {
    const { commonName, scientificName, video, notes, timestamp } = fish;
    const date = moment(timestamp)
        .format('MMMM Do')
        .toUpperCase();
    const videoPlayer = fish && <VideoPlayer src={video} />;
    return (
        <StyledSidebar>
            <FishNames
                commonName={commonName}
                scientificName={scientificName}
            />
            {videoPlayer}
            <footer>
                <Text variant='small'>{notes}</Text>
                <Text variant='small'>{date}</Text>
            </footer>
        </StyledSidebar>
    );
};

Sidebar.propTypes = {
    fish: HighlightFish.isRequired,
};

export default Sidebar;
