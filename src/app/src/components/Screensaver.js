import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import styled from 'styled-components';
import { Flex, Box } from 'rebass';
import { Heading, Button } from './custom-styled-components';
import { themeGet } from 'styled-system';

import Lottie from 'react-lottie';
import animationData from '../media/lotties/fish_swimming.json';

import { hideScreensaver } from '../actions';

const StyledScreensaver = styled(Flex)`
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const StyledTextContainer = styled(Box)`
    z-index: 2;
    position: relative;
    text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
`;

const StyledButton = styled(Button)`
    font-size: ${themeGet('fontSizes.3')};
    padding: ${themeGet('space.normal')} 5rem;
`;

const StyledFishSwiming = styled(Box)`
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

const Screensaver = props => {
    const { dispatch } = props;

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
                console.log(lottieEl.current.anim.wrapper);
                lottieEl.current.anim.wrapper.classList.add('show');
                lottieEl.current.anim.play();
            },
        },
    ];

    const FishSwimming = () => {
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

    return (
        <StyledScreensaver onClick={() => dispatch(hideScreensaver())}>
            <StyledTextContainer width={4 / 5}>
                <Heading
                    as='h1'
                    variant='medium'
                    textShadow='large'
                    fontWeight='medium'
                    opacity={0.9}
                    lineHeight='medium'
                >
                    Learn how fishways help fish reach their spawning habitats
                    and test your fish identification skills!
                </Heading>
                <StyledButton mt='normal'>Dive in!</StyledButton>
            </StyledTextContainer>

            <FishSwimming />
        </StyledScreensaver>
    );
};

Screensaver.propTypes = {
    dispatch: func.isRequired,
};

function mapStateToProps(state) {
    return {
        dispatch: state.dispatch,
    };
}
export default connect(mapStateToProps)(Screensaver);
