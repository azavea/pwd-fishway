import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slider from 'rc-slider';
import React, { useRef, useState } from 'react';
import { Flex } from 'rebass';
import styled from 'styled-components';
import { themeGet } from 'styled-system';

import 'rc-slider/assets/index.css';

import { Button } from './custom-styled-components';
import Video from './Video';

const PlayButton = styled(Button)`
    color: ${themeGet('colors.white')};
    font-size: ${themeGet('fontSizes.3')};
    padding: ${themeGet('space.compact')} ${themeGet('space.compact')}
        ${themeGet('space.compact')} 0;
`;

const Controls = styled(Flex)`
    align-items: center;
`;

const StyledSlider = styled(Slider)`
    padding-right: ${themeGet('space.compact')};

    .rc-slider {
        height: 20px;
    }

    .rc-slider-track,
    .rc-slider-rail {
        height: 8px;
    }

    .rc-slider-track {
        background: ${themeGet('colors.teals.0')};
    }

    .rc-slider-rail {
        background: ${themeGet('colors.teals.3')};
    }

    .rc-slider-handle {
        width: 1.5rem;
        height: 1.5rem;
        margin-left: -0.55rem;
        margin-top: -0.5rem;
        border: 2px solid ${themeGet('colors.teals.6')};
        position: relative;
    }

    .rc-slider-handle::before {
        content: '';
        display: block;
        position: absolute;
        top: -1.5rem;
        right: -1.5rem;
        bottom: -1.5rem;
        left: -1.5rem;
        border-radius: 100%;
    }

    .rc-slider-handle::after {
        content: '';
        display: block;
        background: linear-gradient(
            -45deg,
            rgb(265, 265, 265) 0%,
            rgb(165, 187, 195) 100%
        );
        height: 0.8rem;
        width: 0.8rem;
        margin-top: 50%;
        margin-left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
        border-radius: 100%;
    }

    .rc-slider-handle:active,
    .rc-slider-handle:focus,
    .rc-slider-handle-click-focused:focus {
        border: 2px solid ${themeGet('colors.lightblues.2')};
        box-shadow: 0 0 2px 2px ${themeGet('colors.teals.6')};
    }
`;

const StyledVideo = styled(Video)`
    width: 30rem;
    border-radius: 4px;
    border: 2px solid ${themeGet('colors.teals.3')};
    line-height: 0;
`;

const VideoPlayer = ({ src }) => {
    const [isPlaying, setIsPlaying] = useState(true);
    const [videoTime, setVideoTime] = useState(0);

    const videoRef = useRef(null);

    const icon = isPlaying ? 'pause-circle' : 'play-circle';

    return (
        <Flex flexDirection='column'>
            <StyledVideo
                src={src}
                autoPlay={true}
                setref={videoRef}
                onTimeUpdate={() => {
                    const videoElem = videoRef.current;

                    setVideoTime(videoElem.currentTime / videoElem.duration);
                }}
                // From testing, onTimeUpdate(...) never gets called when
                // the video completes, so we need this separate onEnded(...) cb
                onEnded={() => {
                    setIsPlaying(false);
                    setVideoTime(1);
                }}
            />
            <Controls>
                <PlayButton
                    variant='link'
                    onClick={() => {
                        if (isPlaying) {
                            videoRef.current.pause();
                        } else {
                            videoRef.current.play();
                        }
                        setIsPlaying(!isPlaying);
                    }}
                >
                    <FontAwesomeIcon icon={['fas', icon]} />
                </PlayButton>
                <StyledSlider
                    max={1}
                    step={0.01}
                    value={videoTime}
                    onBeforeChange={() => {
                        if (videoRef.current) {
                            videoRef.current.pause();
                        }
                        setIsPlaying(false);
                    }}
                    onChange={percent => {
                        const videoElem = videoRef.current;
                        if (videoElem) {
                            videoElem.currentTime =
                                percent * videoElem.duration;
                        }
                    }}
                />
            </Controls>
        </Flex>
    );
};

export default VideoPlayer;
