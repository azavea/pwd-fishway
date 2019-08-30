import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import styled from 'styled-components';
import { Flex, Box } from 'rebass';
import { Heading, Button } from './custom-styled-components';
import { themeGet } from 'styled-system';
import FishSwimming from './FishSwimming';

import { hideScreensaver } from '../actions';

const StyledScreensaver = styled(Flex)`
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const StyledTextContainer = styled(Box)`
    z-index: 2;
    position: relative;
    text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
    margin-top: 10%;
`;

const StyledButton = styled(Button)`
    font-size: ${themeGet('fontSizes.3')};
    padding: ${themeGet('space.normal')} 5rem;
`;

const Screensaver = props => {
    const { dispatch } = props;

    return (
        <StyledScreensaver
            onClick={() => setTimeout(() => dispatch(hideScreensaver()), 400)}
        >
            <StyledTextContainer width={4 / 5}>
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
                <StyledButton mt='normal'>Dive in!</StyledButton>
            </StyledTextContainer>

            <FishSwimming />
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
