import React, { Component } from 'react';
import { Button, Flex } from 'rebass';
import { Heading, Text } from './custom-styled-components';
import styled from 'styled-components';

import Video from './Video';

const StyledAboutSlide = styled(Flex)`
    height: 80vh;
    padding: 1rem;

    video {
        margin: auto;
        height: fit-content;
        max-width: 100%;
    }
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

export default class AboutSlide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playing: true,
        };
        this.videoRef = React.createRef();
        this.togglePlayPause = this.togglePlayPause.bind(this);
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

    togglePlayPause() {
        this.setState({ playing: !this.state.playing });
    }

    render() {
        const { active, description, job, name, title, videoPath } = this.props;

        return (
            <StyledAboutSlide>
                <Flex width={3 / 5}>
                    <Video
                        ref={this.videoRef}
                        autoPlay={active}
                        src={videoPath}
                        onClick={this.togglePlayPause}
                    />
                    {!this.state.playing && (
                        <PlayButton onClick={this.togglePlayPause}>
                            ▶
                        </PlayButton>
                    )}
                </Flex>
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
                    <Text>{description}</Text>
                </Flex>
            </StyledAboutSlide>
        );
    }
}
