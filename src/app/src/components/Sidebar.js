import React from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';
import { Heading, Text } from './custom-styled-components';
import { themeGet } from 'styled-system';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { HighlightFish } from '../util/HighlightFish';

import VideoPlayer from './VideoPlayer';
import FishNames from './FishNames';

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

const LiveFeed = styled(Flex)`
    position: relative;
    border-radius: 4px;
    justify-content: center;
    margin: 0 auto ${themeGet('space.compact')};
    background: ${themeGet('colors.teals.4')};

    img {
        width: 30rem;
        height: auto;
        border-radius: 4px;
        border: 2px solid ${themeGet('colors.teals.3')};
        line-height: 0;
    }
`;

const StyledLiveFeedHeading = styled(Heading)`
    position: absolute;
    left: 1rem;
    top: 1rem;
    display: flex;
    align-items: center;
    text-shadow: 0 0 4px rgba(0, 0, 0, 0.75);

    svg {
        color: ${themeGet('colors.red')};
        text-shadow: 0 0 4px rgba(0, 0, 0, 0.75);
    }
`;

const Sidebar = ({ fish }) => {
    const { commonName, scientificName, video, notes, timestamp } = fish;
    const date = moment(timestamp)
        .format('MMMM Do')
        .toUpperCase();

    // The fishway's live video camera sends a stream of JPEG images, not video
    // This is typical of digital cameras
    // All other videos are properly video files (.mp4)
    const videoPlayer = fish.isLiveFeed ? (
        <LiveFeed>
            <StyledLiveFeedHeading as='span' variant='xSmall'>
                <FontAwesomeIcon
                    icon={['fas', 'video']}
                    pull='left'
                    size='lg'
                />
                Live
            </StyledLiveFeedHeading>
            <img
                src={video}
                alt='Live stream from the Schuylkill fishway'
                height='360px'
                width='360px'
            />
        </LiveFeed>
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
