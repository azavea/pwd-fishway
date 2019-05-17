import Carousel from 'nuka-carousel';
import { PagingDots } from 'nuka-carousel/lib';
import { func, number } from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import { Heading } from './custom-styled-components';

import { saveAboutSlideIndex, resetTimer } from '../actions';
import { ABOUT_PROFILES } from '../util/constants';

import AboutSlide from './AboutSlide';

// Amounts greater than 1 indicate how much of the surrounding slides to show
const slidesToShow = 1.3;

const StyledAbout = styled.div`
    padding-top: 1rem;
    background: ${themeGet('colors.teals.4')};

    .about__slide {
        height: 80vh;
        padding: 1rem;
    }
`;

class About extends Component {
    componentWillUnmount() {
        const { dispatch } = this.props;
        dispatch(resetTimer());
    }

    render() {
        const { dispatch, aboutSlideIndex } = this.props;

        const slides = ABOUT_PROFILES.map((profile, index) => (
            <AboutSlide
                key={index}
                active={index === aboutSlideIndex}
                {...profile}
            />
        ));

        return (
            <StyledAbout>
                <Heading as='h1' textAlign='center'>
                    About
                </Heading>
                <Carousel
                    autoplay={false}
                    cellAlign={'center'}
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
            </StyledAbout>
        );
    }
}

About.propTypes = {
    aboutSlideIndex: number.isRequired,
    dispatch: func.isRequired,
};

function mapStateToProps(state) {
    return {
        aboutSlideIndex: state.aboutSlideIndex,
        dispatch: state.dispatch,
    };
}

export default connect(mapStateToProps)(About);
