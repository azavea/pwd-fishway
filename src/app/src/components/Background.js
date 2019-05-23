import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, Image } from 'rebass';
import { themeGet } from 'styled-system';
import { CSSTransition } from 'react-transition-group';
import Lottie from 'react-lottie';
import animationData from '../media/lotties/wave.json';

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
    position: absolute;
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

const StyledWaves = styled(Box)`
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

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
    },
};

const Waves = () => {
    return (
        <StyledWaves>
            <Lottie options={defaultOptions} />
        </StyledWaves>
    );
};

const Background = ({ position }) => {
    return (
        <StyledBackground className={position}>
            <Waves />
            <RiverFloor />
        </StyledBackground>
    );
};

export default Background;
