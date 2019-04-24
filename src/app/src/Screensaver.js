import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { hideScreensaver } from './actions';

class Screensaver extends Component {
    render() {
        const { dispatch } = this.props;

        return (
            <div
                className='screensaver'
                onClick={() => dispatch(hideScreensaver())}
            >
                <div className='screensaver__message'>
                    Learn how the fish ladder helps fish populations and whether
                    you have what it takes to be an aquatic biologist.
                </div>
                <button type='button' className='screensaver__button'>
                    Let's go!
                </button>
            </div>
        );
    }
}

Screensaver.propTypes = {
    dispatch: func.isRequired,
};

function mapStateToProps(state) {
    return {
        dispatch: state.dispatch,
    };
}
export default connect(mapStateToProps)(Screensaver);
