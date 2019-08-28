import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';
import { themeGet } from 'styled-system';
import Lottie from 'react-lottie';
import waveAnimationData from '../media/lotties/wave.json';
import bubblesAnimationData from '../media/lotties/bubbles.json';

const StyledBackground = styled(Box)`
    height: auto !important;
    background-image: linear-gradient(
        to bottom,
        ${themeGet('colors.teals.0')} 3%,
        ${themeGet('colors.teals.1')} 25%,
        ${themeGet('colors.teals.2')} 45%,
        ${themeGet('colors.teals.3')} 65%,
        ${themeGet('colors.teals.4')} 85%,
        ${themeGet('colors.teals.5')} 100%
    );
    background-size: 100% 500%;
    background-position: top;
    position: fixed;
    top: 10%;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    transition: background-position 1.5s, top 1.5s;

    &.top {
        background-position: top;
    }

    &.high {
        top: -20%;
        background-position: 25%;
    }

    &.low {
        top: -20%;
        background-position: top;
    }

    &.bottom {
        top: -20%;
        background-position: bottom;
        transition: background-position 2s 0.25s, top 0.5s;
    }
`;

const Sun = styled(Box)`
    border-radius: 100%;
    position: absolute;
    top: -180px;
    right: 2%;
    z-index: 2;
    background: linear-gradient(
        -243.43494882292202deg,
        rgb(255, 243, 194) 0%,
        rgb(255, 228, 143) 100%
    );
    border: 4px solid rgb(255, 228, 143);
    box-shadow: 0px 0px 34px 0px rgb(255, 235, 164);
    height: 146px;
    width: 146px;
`;

const StyledWaves = styled(Box)`
    position: absolute;
    left: 0;
    right: 0;
    line-height: 0;
`;

const StyledBubbles = styled(Box)`
    position: absolute;
    left: 0;
    right: 0;
    line-height: 0;
`;

const RiverFloor = styled(Box)`
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 0;
    line-height: 0;
    opacity: 0;
    background-image: linear-gradient(
        -135deg,
        ${themeGet('colors.teals.5')} 0%,
        ${themeGet('colors.teals.6')} 100%
    );
    filter: blur(4px);
    transition: height 0.5s 0s, opacity 0.25s 0s;

    ${StyledBackground}.bottom & {
        height: 10rem;
        transition: height 2s 1s, opacity 2s 1s;
        opacity: 1;
    }
`;

const Waves = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: waveAnimationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <StyledWaves>
            <Lottie options={defaultOptions} />
        </StyledWaves>
    );
};

const Bubbles = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: bubblesAnimationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <StyledBubbles>
            <Lottie options={defaultOptions} />
        </StyledBubbles>
    );
};

const Background = ({ position }) => {
    return (
        <StyledBackground className={position}>
            <Sun />
            <Bubbles />
            <Waves />
            <RiverFloor />
        </StyledBackground>
    );
};

export default Background;
