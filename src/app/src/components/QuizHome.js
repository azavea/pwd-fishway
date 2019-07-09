import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, number } from 'prop-types';
import { Flex, Box } from 'rebass';
import styled from 'styled-components';

import { Text, Button } from './custom-styled-components';
import { showQuiz, clearQuizScore } from '../actions';
import Header from './Heading';

const StyledQuizHome = styled(Flex)`
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const StyledFinalQuizState = styled(StyledQuizHome)`
    margin-top: 15%;
`;

const AdjacentElements = styled(Flex)`
    align-items: baseline;
`;

const StyledScore = styled(Header)`
    font-weight: 900;
    font-size: 8.5rem;
`;

class QuizHome extends Component {
    componentWillUnmount() {
        const { dispatch } = this.props;
        dispatch(clearQuizScore());
    }

    render() {
        const { dispatch, quizScore } = this.props;

        const quizHomeState = quizScore ? (
            <StyledFinalQuizState>
                <Text>YOU GOT A SCORE OF</Text>
                <AdjacentElements>
                    <StyledScore>{quizScore}</StyledScore>
                    <Text variant='large'>/500 points</Text>
                </AdjacentElements>
                <Text>
                    Brush up on on your fish knowledge on the Meet the Fish page
                    or try again to improve your score
                </Text>
                <AdjacentElements>
                    <Button mt='compact' variant='secondary'>
                        Meet The Fish
                    </Button>
                    <Button
                        mt='compact'
                        onClick={() => dispatch(clearQuizScore())}
                    >
                        Try again
                    </Button>
                </AdjacentElements>
            </StyledFinalQuizState>
        ) : (
            <StyledFinalQuizState>
                <Box width={1 / 2} mb='4'>
                    <Header as='h1'>Test your skills</Header>
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
            </StyledFinalQuizState>
        );
        return <StyledQuizHome>{quizHomeState}</StyledQuizHome>;
    }
}

QuizHome.propTypes = {
    dispatch: func.isRequired,
    quizScore: number.isRequired,
    secondsToCompleteQuiz: number.isRequired,
};

function mapStateToProps(state) {
    return {
        dispatch: state.dispatch,
        quizScore: state.quizScore,
        secondsToCompleteQuiz: state.secondsToCompleteQuiz,
    };
}
export default connect(mapStateToProps)(QuizHome);
