import React, { Component } from 'react';
import { saveSecondsToCompleteQuiz } from '../actions';

class Timer extends Component {
    constructor() {
        super();
        this.state = {
            elapsedSeconds: 0,
        };
    }

    componentDidMount() {
        this.interval = setInterval(
            () =>
                this.setState(prevState => ({
                    elapsedSeconds: prevState.elapsedSeconds + 1,
                })),
            1000
        );
    }

    componentWillUnmount() {
        const { dispatch } = this.props;
        const { elapsedSeconds } = this.state;

        dispatch(saveSecondsToCompleteQuiz(elapsedSeconds));
        clearInterval(this.interval);
    }

    render() {
        const { elapsedSeconds } = this.state;
        const minutes = Math.floor(elapsedSeconds / 60);
        const seconds = elapsedSeconds % 60;

        const formattedMins = ('0' + minutes).slice(-2);
        const formattedSecs = ('0' + seconds).slice(-2);

        return (
            <>
                {formattedMins}:{formattedSecs}
            </>
        );
    }
}

export default Timer;
