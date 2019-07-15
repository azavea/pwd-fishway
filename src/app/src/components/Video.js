import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';

import { pauseTimer, resetTimer } from '../actions';

const Video = props => {
    const {
        dispatch,
        setref,
        onPlay,
        onPause,
        onEnded,
        autoPlay,
        ...otherProps
    } = props;

    const dispatchIfActiveVideo = action => {
        // autoPlay is an indicator of the video being actively shown to the user
        // in some cases, only the active video should update the global state
        if (autoPlay) {
            return dispatch(action());
        }
    };

    return (
        <video
            onPlay={() => {
                dispatchIfActiveVideo(pauseTimer);
                if (onPlay) {
                    onPlay();
                }
            }}
            onPause={() => {
                dispatchIfActiveVideo(resetTimer);
                if (onPause) {
                    onPause();
                }
            }}
            onEnded={() => {
                dispatchIfActiveVideo(resetTimer);
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
