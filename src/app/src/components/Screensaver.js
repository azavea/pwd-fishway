import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import styled from 'styled-components';
import { Flex, Box } from 'rebass';
import { Heading, Button } from './custom-styled-components';

import { hideScreensaver } from '../actions';

const StyledScreensaver = styled(Flex)`
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Screensaver = props => {
    const { dispatch } = props;

    return (
        <StyledScreensaver onClick={() => dispatch(hideScreensaver())}>
            <Box width={4 / 5}>
                <Heading
                    as='h1'
                    variant='medium'
                    textShadow='large'
                    fontWeight='medium'
                    opacity={0.9}
                    lineHeight='medium'
                >
                    Learn how fishways help fish reach their spawning habitats
                    and test your fish identification skills!
                </Heading>
                <Button>Dive in!</Button>
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
