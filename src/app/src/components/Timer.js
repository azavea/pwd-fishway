import React, { Component } from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';
import { themeGet } from 'styled-system';

import Text from './Text';
import { saveSecondsToCompleteQuiz } from '../actions';

const StyledTimer = styled(Box)`
    position: absolute;
    background-image: linear-gradient(
        to right,
        ${themeGet('colors.teals.0')} 30%,
        ${themeGet('colors.teals.1')} 70%,
        ${themeGet('colors.teals.2')} 100%
    );
    opacity: 11%;
    right: 0px;
    text-align: center;
    width: 300px;
    height: 50px;
`;

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
                this.setState(state => ({
                    elapsedSeconds: state.elapsedSeconds + 1,
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
            <StyledTimer>
                <Text variant='large'>
                    {formattedMins}:{formattedSecs} min
                </Text>
            </StyledTimer>
        );
    }
}

export default Timer;
