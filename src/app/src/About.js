import Carousel from 'nuka-carousel';
import { PagingDots } from 'nuka-carousel/lib';
import { func, number } from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { saveAboutSlideIndex } from './actions';
import AboutSlide from './AboutSlide';
import { aboutProfiles } from './constants';

// Amounts greater than 1 indicate how much of the surrounding slides to show
const slidesToShow = 1.3;

const StyledAbout = styled.div`
    padding-top: 1rem;

    > h2 {
        text-align: center;
    }
`;

const About = props => {
    const { dispatch, aboutSlideIndex } = props;

    const slides = aboutProfiles.map((profile, index) => (
        <AboutSlide
            key={index}
            active={index === aboutSlideIndex}
            {...profile}
        />
    ));

    return (
        <StyledAbout>
            <h2>About</h2>
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
};

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
