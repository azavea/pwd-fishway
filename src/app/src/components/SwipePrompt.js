import React from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';
import Lottie from 'react-lottie';
import animationData from '../animations/swipe_hand';
import { Text } from './custom-styled-components';

const StyledPrompt = styled(Flex)`
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    align-items: center;
    pointer-events: none;
    transition: opacity 0.5s;

    &.animation-done {
        opacity: 0;
    }
`;

const StyledText = styled(Text)`
    font-style: italic;
    margin-top: 1rem;
    margin-left: 0.5rem;
`;

const SwipeHand = ({ turnOffFunc, dispatch }) => {
    const defaultOptions = {
        loop: 1,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    const eventListeners = [
        {
            eventName: 'complete',
            callback: () => {
                document
                    .getElementById('swipe-prompt')
                    .classList.add('animation-done');
                dispatch(turnOffFunc());
            },
        },
    ];

    return (
        <StyledPrompt id='swipe-prompt'>
            <div>
                <Lottie
                    options={defaultOptions}
                    eventListeners={eventListeners}
                />
            </div>
            <StyledText variant='base'>Swipe to continue</StyledText>
        </StyledPrompt>
    );
};

export default SwipeHand;
