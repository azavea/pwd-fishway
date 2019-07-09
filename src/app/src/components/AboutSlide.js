import React, { Component } from 'react';
import { Flex, Box } from 'rebass';
import { Heading, Text, Button } from './custom-styled-components';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { themeGet } from 'styled-system';

import Video from './Video';

const StyledAboutSlide = styled(Flex)`
    padding: 1rem;
    justify-content: flex-start;

    video {
        margin: auto;
        height: 60vh;
        max-width: 100%;
    }
`;

const VideoContainer = styled(Flex)`
    position: relative;
    padding: 2px;
    border: 1px solid ${themeGet('colors.teals.3')};
    background: ${themeGet('colors.teals.6')};
`;

const PlayButton = styled(Button)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    font-size: 150px;
`;

const MuteButton = styled(Button)`
    position: absolute;
    bottom: 0.75rem;
    left: 1rem;
`;

const VideoDescription = styled(Box)`
    padding-left: 3rem;
`;

const VideoHeading = styled(Heading)`
    line-height: ${themeGet('lineHeights.medium')};
`;

const NameText = styled(Text)`
    margin-bottom: 0;
`;

const JobText = styled(Text)`
    font-style: ${themeGet('fontStyles.italic')};
    line-height: ${themeGet('lineHeights.medium')};
    opacity: 0.5;
    margin-bottom: ${themeGet('space.medium')};
`;

export default class AboutSlide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playing: true,
            muted: false,
        };
        this.videoRef = React.createRef();
    }

    componentDidUpdate(prevProps, prevState) {
        if (
            prevProps.active !== this.props.active ||
            prevState.playing !== this.state.playing
        ) {
            this.autoplay();
        }
    }

    autoplay() {
        const videoElem = this.videoRef.current;
        if (this.props.active && this.state.playing) {
            videoElem.play();
        } else {
            videoElem.pause();
        }
    }

    togglePlayPause = () => {
        this.setState(prevState => ({ playing: !prevState.playing }));
    };

    toggledMuted = () => {
        this.setState(prevState => ({ muted: !prevState.muted }));
    };

    render() {
        const {
            active,
            descriptionIntro,
            description,
            job,
            name,
            title,
            videoPath,
        } = this.props;
        const muteIcon = this.state.muted ? 'volume' : 'volume-slash';
        const muteIconColor = this.state.muted ? '#fff' : '#666';

        return (
            <StyledAboutSlide>
                <VideoContainer width={3 / 5}>
                    <Video
                        setref={this.videoRef}
                        autoPlay={active}
                        src={videoPath}
                        onClick={this.togglePlayPause}
                        muted={this.state.muted}
                    />
                    {!this.state.playing && (
                        <PlayButton
                            variant='link'
                            onClick={this.togglePlayPause}
                        >
                            <FontAwesomeIcon icon={['fas', 'play-circle']} />
                        </PlayButton>
                    )}
                    <MuteButton
                        variant='link'
                        onClick={this.toggledMuted}
                        color={muteIconColor}
                    >
                        <FontAwesomeIcon icon={['fa', muteIcon]} />
                    </MuteButton>
                </VideoContainer>
                <VideoDescription width={2 / 5}>
                    <VideoHeading as='h2' variant='base'>
                        {title}
                    </VideoHeading>
                    {job && (
                        <>
                            <Heading as='h3' variant='xSmall'>
                                Name
                            </Heading>
                            <NameText>{name}</NameText>
                            <JobText>{job}</JobText>
                            <Heading as='h3' variant='xSmall'>
                                What he does
                            </Heading>
                        </>
                    )}
                    {descriptionIntro && (
                        <Text variant='large'>{descriptionIntro}</Text>
                    )}
                    <Text>{description}</Text>
                </VideoDescription>
            </StyledAboutSlide>
        );
    }
}
