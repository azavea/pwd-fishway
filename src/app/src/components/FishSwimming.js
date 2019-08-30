import React, { useRef } from 'react';
import styled from 'styled-components';
import Lottie from 'react-lottie';
import animationData from '../animations/fish_swimming';

const StyledFishSwiming = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 0;
    pointer-events: none;

    .fish-swimming {
        opacity: 0;
        transition: opacity 2s;
    }

    .show .fish-swimming {
        opacity: 1;
    }
`;

const FishSwimming = () => {
    const lottieEl = useRef(null);

    const defaultOptions = {
        loop: true,
        autoplay: false,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
            clearCanvas: true,
            progressiveLoad: true,
            className: 'fish-swimming',
        },
    };

    const eventListeners = [
        {
            eventName: 'loaded_images',
            callback: () => {
                lottieEl.current.anim.wrapper.classList.add('show');
                lottieEl.current.anim.play();
            },
        },
    ];

    return (
        <StyledFishSwiming>
            <Lottie
                options={defaultOptions}
                eventListeners={eventListeners}
                ref={lottieEl}
            />
        </StyledFishSwiming>
    );
};

export default FishSwimming;
