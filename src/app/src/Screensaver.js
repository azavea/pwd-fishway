import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { hideScreensaver } from './actions';
import styled from 'styled-components';
import { Flex, Box, Button } from 'rebass';
import { Heading } from '../src';
import { themeGet } from 'styled-system';

const StyledScreensaver = styled(Flex)`
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${themeGet('colors.teals.0')};
`;

const Screensaver = props => {
    const { dispatch } = props;

    return (
        <StyledScreensaver onClick={() => dispatch(hideScreensaver())}>
            <Box>
                <Heading as='h1' variant='intro'>
                    Learn how the fish ladder helps fish populations and whether
                    you have what it takes to be an aquatic biologist.
                </Heading>
                <Button>Let's go!</Button>
            </Box>
        </StyledScreensaver>
    );
};

Screensaver.propTypes = {
    dispatch: func.isRequired,
};

function mapStateToProps(state) {
    return {
        dispatch: state.dispatch,
    };
}
export default connect(mapStateToProps)(Screensaver);
