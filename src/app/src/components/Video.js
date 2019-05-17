import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';

import { pauseTimer, resetTimer } from '../actions';

const Video = props => {
    const { dispatch, setref, ...otherProps } = props;

    return (
        <video
            onPlay={() => dispatch(pauseTimer())}
            onPause={() => dispatch(resetTimer())}
            onEnded={() => dispatch(resetTimer())}
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
