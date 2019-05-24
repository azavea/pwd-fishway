import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bool, func, string } from 'prop-types';
import IdleTimer from 'react-idle-timer';

import { resetAppState } from './actions';

import Navbar from './components/Navbar';
import Screensaver from './components/Screensaver';
import Background from './components/Background';
import Quiz from './components/Quiz';
import GlobalStyle from './util/globalStyle';
import { RESET, PAUSE, MAX_IDLE_TIME } from './util/constants';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes as falTimes, faCheck } from '@fortawesome/pro-light-svg-icons';
import {
    faBullseyePointer,
    faEye,
    faInfoCircle,
    faHome,
    faTimes,
    faHistory,
    faLongArrowRight,
    faLongArrowLeft,
    faQuestionCircle,
    faExclamationCircle,
    faUndo,
} from '@fortawesome/pro-regular-svg-icons';
import {
    faInfoCircle as fasInfoCircle,
    faVideo,
    faVolumeSlash,
    faVolume,
    faFish,
    faPlayCircle,
    faPauseCircle,
    faEye as fasEye,
    faHome as fasHome,
    faHistory as fasHistory,
} from '@fortawesome/pro-solid-svg-icons';

library.add(
    faInfoCircle,
    fasInfoCircle,
    faVideo,
    faFish,
    faBullseyePointer,
    faVolumeSlash,
    faVolume,
    faPlayCircle,
    faPauseCircle,
    faEye,
    fasEye,
    faHome,
    fasHome,
    faHistory,
    fasHistory,
    falTimes,
    faTimes,
    faLongArrowRight,
    faLongArrowLeft,
    faQuestionCircle,
    faExclamationCircle,
    faCheck,
    faUndo
);

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
        const {
            isScreensaverVisible,
            isQuizVisible,
            dispatch,
            backgroundPosition,
        } = this.props;
        const screensaver = <Screensaver />;
        const navbar = (
            <Navbar dispatch={dispatch} isQuizVisible={isQuizVisible} />
        );
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
        const quiz = <Quiz dispatch={dispatch} />;

        const app = isScreensaverVisible ? (
            screensaver
        ) : (
            <>
                {navbar}
                {idleTimer}
            </>
        );

        return (
            <div className='App'>
                <GlobalStyle />
                {app}
                {isQuizVisible && quiz}
                <Background position={backgroundPosition} />
            </div>
        );
    }
}

App.propTypes = {
    isScreensaverVisible: bool.isRequired,
    dispatch: func.isRequired,
    timerEvent: string.isRequired,
    isQuizVisible: bool.isRequired,
    backgroundPosition: string.isRequired,
};

function mapStateToProps(state) {
    return {
        isScreensaverVisible: state.isScreensaverVisible,
        dispatch: state.dispatch,
        timerEvent: state.timerEvent,
        isQuizVisible: state.isQuizVisible,
        backgroundPosition: state.backgroundPosition,
    };
}
export default connect(mapStateToProps)(App);
