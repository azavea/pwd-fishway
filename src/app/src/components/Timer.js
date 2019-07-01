import React, { Component } from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';
import { themeGet } from 'styled-system';

const StyledTimer = styled(Box)`
    background: ${themeGet('colors.teals.4')};
    position: absolute;
    color: white;
    right: 0px;
    text-align: center;
    width: 200px;
    height: 30px;
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
                {formattedMins}:{formattedSecs} min
            </StyledTimer>
        );
    }
}

export default Timer;
