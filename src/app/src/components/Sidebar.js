import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';
import { Text } from './custom-styled-components';
import { themeGet } from 'styled-system';
import moment from 'moment';

import { HighlightFish } from '../util/HighlightFish';

import VideoPlayer from './VideoPlayer';
import FishNames from './FishNames';
import { LIVE_FEED_LABEL } from '../util/constants';

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

    // The fishway's live video camera sends a stream of JPEG images, not video
    // This is typical of digital cameras
    // All other videos are properly video files (.mp4)
    const videoPlayer =
        fish && commonName === LIVE_FEED_LABEL ? (
            <img
                src={video}
                alt='Live stream from the Schuylkill fishway'
                height='360px'
                width='360px'
            />
        ) : (
            <VideoPlayer src={video} />
        );
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
