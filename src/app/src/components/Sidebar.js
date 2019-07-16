import React, { Component } from 'react';
import { bool, func } from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Flex } from 'rebass';
import { Heading, Text } from './custom-styled-components';
import { themeGet } from 'styled-system';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { HighlightFish } from '../util/HighlightFish';

import VideoPlayer from './VideoPlayer';
import FishNames from './FishNames';
import { showConnectionErrorMessage } from '../actions';

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

const LiveFeedError = styled(Flex)`
    height: 360px;
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

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.logLiveFeedError = this.logLiveFeedError.bind(this);
        window.addEventListener('offline', this.logLiveFeedError);
    }

    logLiveFeedError() {
        const { dispatch } = this.props;
        dispatch(showConnectionErrorMessage());
    }

    componentWillUnmount() {
        window.removeEventListener('offline', this.logLiveFeedError);
    }

    render() {
        const { fish, showConnectionError } = this.props;
        const { commonName, scientificName, video, notes, timestamp } = fish;
        const date = moment(timestamp)
            .format('MMMM Do')
            .toUpperCase();

        let videoPlayer = null;
        if (fish.isLiveFeed) {
            // For best UX, show the user a live feed error message if the internet connection fails while viewing SeeTheFishway
            // Otherwise, hide the live feed until internet-connected so the user doesn't feel like they're missing something
            if (navigator.onLine) {
                videoPlayer = (
                    <LiveFeed>
                        <StyledLiveFeedHeading as='span' variant='xSmall'>
                            <FontAwesomeIcon
                                icon={['fas', 'video']}
                                pull='left'
                                size='lg'
                            />
                            Live
                        </StyledLiveFeedHeading>
                        {/*The fishway's live video camera sends a stream of JPEG images, not video.
                            This is typical of digital cameras. All other videos are proper video files (.mp4) */}
                        <img
                            src={video}
                            alt='Live stream from the Schuylkill fishway'
                            height='360px'
                            width='360px'
                        />
                    </LiveFeed>
                );
            } else if (showConnectionError) {
                videoPlayer = (
                    <LiveFeedError>
                        <Text>
                            Oops! There's a problem connecting to the live
                            camera. Try again later!
                        </Text>
                    </LiveFeedError>
                );
            }
        } else {
            videoPlayer = <VideoPlayer src={video} key={video} />;
        }
        return (
            <StyledSidebar>
                <FishNames
                    spacing='spacious'
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
    }
}

Sidebar.propTypes = {
    fish: HighlightFish.isRequired,
    showConnectionError: bool.isRequired,
    dispatch: func.isRequired,
};

function mapStateToProps(state) {
    return {
        showConnectionError: state.showConnectionError,
        dispatch: state.dispatch,
    };
}

export default connect(mapStateToProps)(Sidebar);
