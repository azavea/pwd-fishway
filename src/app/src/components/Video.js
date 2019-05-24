import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';

import { pauseTimer, resetTimer } from '../actions';

const Video = props => {
    const { dispatch, setref, onPlay, onPause, onEnded, ...otherProps } = props;

    return (
        <video
            onPlay={() => {
                dispatch(pauseTimer());
                if (onPlay) {
                    onPlay();
                }
            }}
            onPause={() => {
                dispatch(resetTimer());
                if (onPause) {
                    onPause();
                }
            }}
            onEnded={() => {
                dispatch(resetTimer());
                if (onEnded) {
                    onEnded();
                }
            }}
            ref={setref}
            {...otherProps}
        />
    );
};

Video.propTypes = {
    dispatch: func.isRequired,
};

function mapStateToProps(state) {
    return {
        dispatch: state.dispatch,
    };
}

export default connect(mapStateToProps)(Video);
