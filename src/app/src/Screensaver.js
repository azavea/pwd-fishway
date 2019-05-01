import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { hideScreensaver } from './actions';
import styled from 'styled-components';

const StyledScreensaver = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;

    p {
        font-size: 2rem;
        margin-top: 40vh;
        text-align: center;
    }
`;

const Screensaver = props => {
    const { dispatch } = props;

    return (
        <StyledScreensaver
            className='screensaver'
            onClick={() => dispatch(hideScreensaver())}
        >
            <p>
                Learn how the fish ladder helps fish populations and whether you
                have what it takes to be an aquatic biologist.
            </p>
            <button type='button' className='screensaver__button'>
                Let's go!
            </button>
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
