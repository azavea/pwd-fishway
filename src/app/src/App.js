import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bool, func, string } from 'prop-types';
import IdleTimer from 'react-idle-timer';

import Navbar from './Navbar';
import Screensaver from './Screensaver';
import GlobalStyle from './globalStyle';
import { resetAppState } from './actions';
import { RESET, PAUSE } from './constants';

class App extends Component {
    constructor() {
        super();
        this.idleTimer = null;
        this.resetTimer = this.resetTimer.bind(this);
        this.pauseTimer = this.pauseTimer.bind(this);
    }

    shouldComponentUpdate(nextProps) {
        const { timerEvent: nextTimerEvent } = nextProps;
        if (nextTimerEvent !== this.props.timerEvent) {
            if (nextTimerEvent === RESET) {
                this.resetTimer();
            } else if (nextTimerEvent === PAUSE) {
                this.pauseTimer();
            }
        }
        return true;
    }

    pauseTimer() {
        this.idleTimer.pause();
    }

    resetTimer() {
        this.idleTimer.reset();
    }

    render() {
        const { isScreensaverVisible, dispatch } = this.props;
        const app = isScreensaverVisible ? <Screensaver /> : <Navbar />;
        const idleTimer = (
            <IdleTimer
                ref={ref => {
                    this.idleTimer = ref;
                }}
                element={document}
                onIdle={() => dispatch(resetAppState())}
                onAction={this.resetTimer}
                timeout={5000}
            />
        );
        return (
            <div className='App'>
                <GlobalStyle />
                {!isScreensaverVisible && idleTimer}
                {app}
            </div>
        );
    }
}

App.propTypes = {
    isScreensaverVisible: bool.isRequired,
    dispatch: func.isRequired,
    timerEvent: string.isRequired,
};

function mapStateToProps(state) {
    return {
        isScreensaverVisible: state.isScreensaverVisible,
        dispatch: state.dispatch,
        timerEvent: state.timerEvent,
    };
}
export default connect(mapStateToProps)(App);
