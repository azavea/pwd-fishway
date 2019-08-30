import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, number } from 'prop-types';
import { Flex, Box } from 'rebass';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Lottie from 'react-lottie';
import animationData from '../animations/fish_swimming';

import { Heading, Text, Button } from './custom-styled-components';
import {
    showQuiz,
    clearQuizScore,
    setActiveTab,
    setBackgroundPosition,
} from '../actions';
import { MEET, POSITIONS } from '../util/constants';
import QuizMedallion from './QuizMedallion';

const StyledQuizHome = styled(Flex)`
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const StyledFinalQuizState = styled(StyledQuizHome)`
    margin-top: 15%;
    z-index: 1;
    position: relative;
    text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
`;

const StyledScoreIntro = styled(Text)`
    text-transform: uppercase;
    font-weight: ${themeGet('fontWeights.semibold')};
    letter-spacing: ${themeGet('letterSpacings.caps')};
`;

const StyledScoreContainer = styled(Flex)`
    align-items: flex-end;
    margin-bottom: ${themeGet('space.compact')};
`;

const StyledScore = styled(Heading)`
    line-height: 0.8;
    position: relative;
`;

const StyledButton = styled(Button)`
    margin: 1rem;
`;

const StyledFishSwiming = styled(Box)`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 0;
    pointer-events: none;
`;

class QuizHome extends Component {
    componentWillUnmount() {
        const { dispatch } = this.props;
        dispatch(clearQuizScore());
    }

    render() {
        const { dispatch, quizScore, secondsToCompleteQuiz } = this.props;

        let bonusPoints = 0;
        if (secondsToCompleteQuiz < 31) {
            bonusPoints += 100;
        } else if (secondsToCompleteQuiz < 61) {
            bonusPoints += 50;
        } else if (secondsToCompleteQuiz < 121) {
            bonusPoints += 20;
        }

        const medallion = (
            <QuizMedallion value={bonusPoints} isFinalScorePage={true} />
        );

        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
                clearCanvas: true,
                progressiveLoad: true,
            },
        };

        const FishSwimming = () => (
            <StyledFishSwiming>
                <Lottie options={defaultOptions} />
            </StyledFishSwiming>
        );

        const quizHomeState = quizScore ? (
            <StyledFinalQuizState>
                <StyledScoreIntro variant='large'>
                    You got a score of
                </StyledScoreIntro>
                <StyledScoreContainer>
                    <StyledScore variant='xxlarge'>
                        {bonusPoints > 0 && medallion}
                        {quizScore + bonusPoints}
                    </StyledScore>
                    <Text variant='xlarge'>/500 points</Text>
                </StyledScoreContainer>

                <Text variant='large' width={880}>
                    You might be ready for a deeper dive! Let us know if you’d
                    like to learn more about becoming a water steward or getting
                    involved with one of our freshwater mussel outreach
                    programs!
                </Text>

                <Text variant='base' width={880}>
                    Brush up on on your fish knowledge on the Meet the Fish page
                    or try again to improve your score.
                </Text>
                <Flex alignItems='baseline'>
                    <StyledButton
                        mt='normal'
                        variant='secondary'
                        onClick={() => {
                            dispatch(setActiveTab(MEET));
                            dispatch(setBackgroundPosition(POSITIONS[MEET]));
                        }}
                    >
                        Meet The Fish
                    </StyledButton>
                    <StyledButton
                        mt='normal'
                        onClick={() => dispatch(clearQuizScore())}
                    >
                        Try again
                        <FontAwesomeIcon icon={['far', 'undo']} pull='right' />
                    </StyledButton>
                </Flex>
            </StyledFinalQuizState>
        ) : (
            <>
                <StyledFinalQuizState>
                    <Box width={880} mb='4'>
                        <Heading as='h1' variant='medium'>
                            Test your skills
                        </Heading>
                        <Text as='p' variant='large'>
                            Aquatic biologists monitor the live video feed
                            captured by the fishway camera to identify and
                            document each fish that moves through the fishway.
                            This can be tough, because fish swim fast and are
                            hard to see!
                        </Text>
                        <Text as='p'>
                            Watch the video clip of fish moving through the
                            fishway and match it to the correct species of fish.
                            Work quickly and carefully to get the highest score!
                        </Text>
                    </Box>
                    <Button mt='normal' onClick={() => dispatch(showQuiz())}>
                        Play
                    </Button>
                </StyledFinalQuizState>
                <FishSwimming />
            </>
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
