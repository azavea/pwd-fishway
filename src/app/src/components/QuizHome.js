import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { Flex, Box } from 'rebass';
import { Heading, Text, Button } from './custom-styled-components';
import styled from 'styled-components';
import { showQuiz, clearQuizResults } from '../actions';

const StyledQuizHome = styled(Flex)`
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

class QuizHome extends Component {
    componentWillUnmount() {
        const { dispatch } = this.props;
        dispatch(clearQuizResults());
    }

    render() {
        const { dispatch, finalQuizState } = this.props;

        const quizHomeState = finalQuizState ? (
            <Button mt='compact' onClick={() => dispatch(clearQuizResults())}>
                Try again
            </Button>
        ) : (
            <>
                <Box width={1 / 2} mb='4'>
                    <Heading as='h1'>Test your skills</Heading>
                    <Text as='p' variant='large'>
                        Aquatic biologists need to identify each fish that moves
                        through the fishway. This can be tough, because fish
                        swim fast and are hard to see!
                    </Text>
                    <Text as='p'>
                        Watch the clip of fish moving through the fishway and
                        match it to the correct fish. Work quickly and carefully
                        to get the highest score!
                    </Text>
                </Box>
                <Button mt='compact' onClick={() => dispatch(showQuiz())}>
                    Play
                </Button>
            </>
        );
        return <StyledQuizHome>{quizHomeState}</StyledQuizHome>;
    }
}

QuizHome.propTypes = {
    dispatch: func.isRequired,
};

function mapStateToProps(state) {
    return {
        dispatch: state.dispatch,
        finalQuizState: state.finalQuizState,
    };
}
export default connect(mapStateToProps)(QuizHome);
