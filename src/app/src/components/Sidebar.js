import React from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';
import { Text } from './custom-styled-components';
import { themeGet } from 'styled-system';
import moment from 'moment';

import { HighlightFish } from '../util/HighlightFish';

import VideoPlayer from './VideoPlayer';
import FishNames from './FishNames';
import { LIVE_FEED_LABEL } from '../util/constants';

const StyledSidebar = styled(Flex)`
    position: sticky;
    top: ${themeGet('navHeight')};
    flex-direction: column;
    justify-content: center;
    background: ${themeGet('colors.teals.5')};
    text-align: center;
    padding: 3.95rem ${themeGet('space.comfortable')};
    height: calc(100vh - ${themeGet('navHeight')});
`;

const StyledFishNames = styled(FishNames)`
    margin-bottom: ${themeGet('space.spacious')};
`;

const FooterNotes = styled(Text)`
    max-width: ${themeGet('maxWidths.xsmall')};
    margin: 0 auto ${themeGet('space.compact')};
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
            <StyledFishNames
                commonName={commonName}
                scientificName={scientificName}
            />
            {videoPlayer}
            <footer>
                <FooterNotes as='p' variant='small'>
                    {notes}
                </FooterNotes>
                <Text as='p' variant='small'>
                    {date}
                </Text>
            </footer>
        </StyledSidebar>
    );
};

Sidebar.propTypes = {
    fish: HighlightFish.isRequired,
};

export default Sidebar;
