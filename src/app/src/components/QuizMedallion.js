import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'rebass';
import { Text } from './custom-styled-components';
import { themeGet } from 'styled-system';

import Lottie from 'react-lottie';
import animationData from '../media/lotties/medallion.json';

const StyledQuizMedallion = styled(Box)`
    position: absolute;
    top: ${props => (props.quizDone ? '-1rem' : '-2rem')};
    right: ${props => (props.quizDone ? '-3rem' : '0')};
    z-index: 2;
    width: ${props => (props.quizDone ? '7.2rem' : '4.25rem')};
    height: ${props => (props.quizDone ? '7.2rem' : '4.25rem')};

    svg {
        position: absolute;
        top: 0;
        left: 0;
    }
`;

const StyledEncouragement = styled(Text)`
    text-align: center;
    color: ${themeGet('colors.teals.6')};
    font-style: ${themeGet('fontStyles.italic')};
    font-weight: ${themeGet('fontWeights.semibold')};
    flex: 1 100%;
    margin-bottom: 0;
    line-height: ${themeGet('lineHeights.compact')};
    white-space: nowrap;
`;

const StyledMedallionIcon = styled(Box)`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
`;

const PointsContainer = styled(Flex)`
    flex-wrap: ${props => (props.isFullSize ? 'wrap' : 'nowrap')};
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-25deg);
    z-index: 1;
    opacity: 0;
    transition: opacity 0s ease-in;

    &.animation-done {
        transition: opacity 0.5s 0.5s ease-in;
        opacity: 1;
    }
`;

const Plus = styled(Text)`
    color: ${themeGet('colors.teals.6')};
    line-height: ${themeGet('lineHeights.compact')};
    margin-bottom: -0.25rem;
`;

const Points = styled(Text)`
    color: ${themeGet('colors.teals.6')};
    font-weight: ${themeGet('fontWeights.black')};
    line-height: ${themeGet('lineHeights.compact')};
    margin-bottom: 0;
`;

const QuizMedallion = ({ value, quizDone }) => {
    const containerEl = useCallback(node => {
        if (node !== null) {
            // a minimal setTimeout ensures the component registers the css transition
            // rely on direct DOM manipulation. className must be triggered outside the
            // React state or lifecycle methods to prevent Lottie from re-running
            setTimeout(() => node.classList.add('animation-done'), 1);
        }
    }, []);

    const lottieEl = useRef(null);

    const encouragement = (
        // Don't forget to change this based on the scenario
        <StyledEncouragement as='span' variant='small'>
            nice job!
        </StyledEncouragement>
    );

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
            clearCanvas: true,
        },
    };

    const eventListeners = [
        {
            eventName: 'complete',
            callback: () => {
                setTimeout(() => {
                    if (lottieEl.current && !quizDone) {
                        lottieEl.current.anim.setSpeed(6);
                        lottieEl.current.anim.setDirection(-1);
                        lottieEl.current.anim.play();
                        document
                            .getElementById('points-container')
                            .classList.remove('animation-done');
                    }
                }, 1000);
            },
        },
    ];

    const MedallionIcon = () => {
        return (
            <StyledMedallionIcon>
                <Lottie
                    options={defaultOptions}
                    eventListeners={eventListeners}
                    ref={lottieEl}
                />
            </StyledMedallionIcon>
        );
    };

    return (
        <StyledQuizMedallion quizDone={quizDone}>
            <PointsContainer
                isFullSize={quizDone}
                ref={containerEl}
                id='points-container'
            >
                {quizDone && encouragement}
                <Plus as='span' variant='small'>
                    +
                </Plus>
                <Points as='span' variant='base'>
                    {value}
                </Points>
            </PointsContainer>
            <MedallionIcon />
        </StyledQuizMedallion>
    );
};

export default QuizMedallion;
