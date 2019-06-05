import React, { Component } from 'react';
import { Flex } from 'rebass';
import { Heading, Text, Button } from './custom-styled-components';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { themeGet } from 'styled-system';

import Video from './Video';

const StyledAboutSlide = styled(Flex)`
    padding: 1rem;
    align-items: center;

    video {
        margin: auto;
        height: fit-content;
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
    background: gray;
    height: 300px;
    width: 300px;
    border-radius: 50%;
    opacity: 0.5;
    top: 50%;
    left: 18%;
    transform: translateY(-50%);
    font-size: 150px;
    text-align: center;
`;

const MuteButton = styled(Button)`
    position: absolute;
    bottom: 0.75rem;
    left: 1rem;
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
        this.setState({ playing: !this.state.playing });
    };

    toggledMuted = () => {
        this.setState({ muted: !this.state.muted });
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
                        <PlayButton onClick={this.togglePlayPause}>
                            ▶
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
                <Flex
                    width={2 / 5}
                    padding='2rem'
                    margin='auto'
                    flexDirection='column'
                >
                    <Heading as='h2' variant='small'>
                        {title}
                    </Heading>
                    {job && (
                        <>
                            <Heading as='h3' variant='xSmall'>
                                Name
                            </Heading>
                            <Text>{name}</Text>
                            <Text>{job}</Text>
                            <Heading as='h3' variant='xSmall'>
                                What he does
                            </Heading>
                        </>
                    )}
                    <Text>{descriptionIntro}</Text>
                    <Text>{description}</Text>
                </Flex>
            </StyledAboutSlide>
        );
    }
}
