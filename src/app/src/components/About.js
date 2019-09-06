import Carousel from 'nuka-carousel';
import { Flex } from 'rebass';
import { PagingDots } from 'nuka-carousel/lib';
import { func, number, bool } from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Heading } from './custom-styled-components';
import { themeGet } from 'styled-system';

import {
    saveAboutSlideIndex,
    resetTimer,
    turnOffSwipePromptAboutTab,
} from '../actions';
import { ABOUT_PROFILES } from '../util/constants';

import AboutSlide from './AboutSlide';
import SwipePrompt from './SwipePrompt';

// Amounts greater than 1 indicate how much of the surrounding slides to show
const slidesToShow = 1;

const StyledAbout = styled(Flex)`
    height: calc(100vh - 5rem);
    flex-direction: column;
    justify-content: center;

    .slider {
        padding-top: 2rem;
    }

    .slider-slide {
        opacity: 0;
        transition: opacity 0.25s;
    }

    .slide-visible {
        opacity: 1;
    }

    .paging-item button:focus {
        outline: none;
    }

    .paging-dot {
        background: ${themeGet('colors.teals.2')}!important;
        width: 14px !important;
        height: 14px !important;
        opacity: 0.85 !important;
        transform: scale(1);
        transition: transform 0.25s, opacity 0.25s;
        box-shadow: ${themeGet('shadows.large')};

        &:active {
            opacity: 1 !important;
        }
    }

    .active .paging-dot {
        opacity: 1;
        transform: scale(1.5);
    }
`;

class About extends Component {
    componentWillUnmount() {
        const { dispatch } = this.props;
        dispatch(resetTimer());
    }

    render() {
        const {
            dispatch,
            aboutSlideIndex,
            showSwipePromptAboutTab,
        } = this.props;

        const slides = ABOUT_PROFILES.map((profile, index) => (
            <AboutSlide
                key={index}
                active={index === aboutSlideIndex}
                {...profile}
            />
        ));

        const swipePrompt = (
            <SwipePrompt
                turnOffFunc={turnOffSwipePromptAboutTab}
                dispatch={dispatch}
            />
        );

        return (
            <StyledAbout>
                <Heading as='h1' textAlign='center'>
                    About
                </Heading>
                <Carousel
                    autoplay={false}
                    cellAlign={'center'}
                    animation={'zoom'}
                    renderCenterLeftControls={null}
                    renderCenterRightControls={null}
                    renderBottomCenterControls={null}
                    renderTopCenterControls={props => <PagingDots {...props} />}
                    slideIndex={aboutSlideIndex}
                    slidesToShow={slidesToShow}
                    afterSlide={slideIndex =>
                        dispatch(saveAboutSlideIndex(slideIndex))
                    }
                >
                    {slides}
                </Carousel>
                {showSwipePromptAboutTab && swipePrompt}
            </StyledAbout>
        );
    }
}

About.propTypes = {
    aboutSlideIndex: number.isRequired,
    dispatch: func.isRequired,
    showSwipePromptAboutTab: bool.isRequired,
};

function mapStateToProps(state) {
    return {
        aboutSlideIndex: state.aboutSlideIndex,
        dispatch: state.dispatch,
        showSwipePromptAboutTab: state.showSwipePromptAboutTab,
    };
}

export default connect(mapStateToProps)(About);
