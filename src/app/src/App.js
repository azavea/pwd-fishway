import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bool, func, string } from 'prop-types';
import IdleTimer from 'react-idle-timer';

import { resetAppState } from './actions';
import { RESET, PAUSE, MAX_IDLE_TIME } from './constants';

import Navbar from './components/Navbar';
import Screensaver from './components/Screensaver';
import QuizView from './components/QuizView';
import GlobalStyle from './util/globalStyle';

class App extends Component {
    constructor() {
        super();
        this.idleTimer = null;
        this.resetTimer = this.resetTimer.bind(this);
        this.pauseTimer = this.pauseTimer.bind(this);
    }

    componentDidUpdate(prevProps) {
        const { timerEvent: prevTimerEvent } = prevProps;
        const { timerEvent: currentTimerEvent } = this.props;
        if (this.idleTimer && prevTimerEvent !== currentTimerEvent) {
            if (currentTimerEvent === RESET) {
                this.resetTimer();
            } else if (currentTimerEvent === PAUSE) {
                this.pauseTimer();
            }
        }
    }

    pauseTimer() {
        this.idleTimer.pause();
    }

    resetTimer() {
        this.idleTimer.reset();
    }

    render() {
        const { isScreensaverVisible, dispatch, isQuizVisible } = this.props;
        const app = isScreensaverVisible ? <Screensaver /> : <Navbar />;
        const screensaver = <Screensaver />;
        const quiz = <QuizView />;
        const app = <Navbar />;
        const idleTimer = (
            <IdleTimer
                ref={ref => {
                    this.idleTimer = ref;
                }}
                element={document}
                onIdle={() => dispatch(resetAppState())}
                onAction={this.resetTimer}
                timeout={MAX_IDLE_TIME}
            />
        );
        return (
            <div className='App'>
                <GlobalStyle />
                {isScreensaverVisible && screensaver}
                {!isScreensaverVisible && idleTimer}
                {!isScreensaverVisible && !isQuizVisible && app}
                {isQuizVisible && quiz}
            </div>
        );
    }
}

App.propTypes = {
    isScreensaverVisible: bool.isRequired,
    dispatch: func.isRequired,
    timerEvent: string.isRequired,
    isQuizVisible: bool.isRequired,
};

function mapStateToProps(state) {
    return {
        isScreensaverVisible: state.isScreensaverVisible,
        dispatch: state.dispatch,
        timerEvent: state.timerEvent,
        isQuizVisible: state.isQuizVisible,
    };
}
export default connect(mapStateToProps)(App);
