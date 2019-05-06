import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import styled from 'styled-components';
import { Flex, Box, Button } from 'rebass';
import { Heading, Text } from './custom-styled-components';
import { themeGet } from 'styled-system';

import { showQuiz } from '../actions';

const StyledQuiz = styled(Flex)`
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${themeGet('colors.teals.0')};
`;

const Quiz = props => {
    const { dispatch } = props;
    return (
        <StyledQuiz>
            <Box width={1 / 2} mb='4'>
                <Heading as='h1'>Test your skills</Heading>
                <Text as='p' variant='large'>
                    Aquatic biologists need to identify each fish that moves
                    through the fishway. This can be tough, because fish swim
                    fast and are hard to see!
                </Text>
                <Text as='p'>
                    Watch the clip of fish moving through the fishway and match
                    it to the correct fish. Work quickly and carefully to get
                    the highest score!
                </Text>
            </Box>
            <Button mt='compact' onClick={() => dispatch(showQuiz())}>
                Play
            </Button>
        </StyledQuiz>
    );
};

Quiz.propTypes = {
    dispatch: func.isRequired,
};

function mapStateToProps(state) {
    return {
        dispatch: state.dispatch,
    };
}
export default connect(mapStateToProps)(Quiz);
