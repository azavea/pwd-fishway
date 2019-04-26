import Carousel from 'nuka-carousel';
import { PagingDots } from 'nuka-carousel/lib';
import { func, number } from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { saveAboutSlideIndex } from './actions';

// Amounts greater than 1 indicate how much of the surrounding slides to show
const slidesToShow = 1.3;

class About extends Component {
    render() {
        const { dispatch, aboutSlideIndex } = this.props;

        return (
            <div className='about'>
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
                    <div className='about__slide'>The Fishway! So cool!!</div>
                    <div className='about__slide'>
                        Marine biologists! Even cooler!
                    </div>
                    <div className='about__slide'>
                        Computer Engineers! Pretty cool too!
                    </div>
                    <div className='about__slide'>Dams! The coolest!</div>
                </Carousel>
            </div>
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
