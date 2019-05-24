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
    color: '#fff';
    font-size: ${themeGet('fontSizes.3')};
`;

const VideoPlayer = ({ src }) => {
    const [isPlaying, setIsPlaying] = useState(true);
    const [videoTime, setVideoTime] = useState(0);

    const videoRef = useRef(null);

    const icon = isPlaying ? 'pause-circle' : 'play-circle';

    return (
        <Flex flexDirection='column'>
            <Video
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
            <Flex>
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
                <Slider
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
                    onAfterChange={percent => {
                        // Don't play the video if the scrubber was dragged to
                        // the end, otherwise it will *restart*
                        if (percent !== 1) {
                            if (videoRef.current) {
                                videoRef.current.play();
                            }
                            setIsPlaying(true);
                        }
                    }}
                />
            </Flex>
        </Flex>
    );
};

export default VideoPlayer;
