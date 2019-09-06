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
    transition: opacity 0.5s;

    &.animation-done {
        opacity: 0;
    }
`;

const StyledSwipeHand = styled.div``;

const StyledText = styled(Text)`
    font-style: italic;
    margin-top: 1rem;
    margin-left: 0.5rem;
`;

const SwipeHand = () => {
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
            },
        },
    ];

    return (
        <StyledPrompt id='swipe-prompt'>
            <StyledSwipeHand>
                <Lottie
                    options={defaultOptions}
                    eventListeners={eventListeners}
                />
            </StyledSwipeHand>
            <StyledText variant='base'>Swipe to continue</StyledText>
        </StyledPrompt>
    );
};

export default SwipeHand;
