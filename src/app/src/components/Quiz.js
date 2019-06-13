import shuffle from 'lodash/shuffle';
import React from 'react';
import styled from 'styled-components';
import { Box, Flex } from 'rebass';
import { themeGet } from 'styled-system';

import QuizNavbar from './QuizNavbar';
import QuizGuess from './QuizGuess';
import QuizQuestion from './QuizQuestion';
import QuizSidebar from './QuizSidebar';

import {
    QUIZ_FISH,
    GUESS_MESSAGE_TIME,
    NUM_QUIZ_QUESTIONS,
} from '../util/constants';
import { hideQuiz, saveQuizResults } from '../actions';

const QuizContainer = styled(Flex)`
    text-align: center;
    background: ${themeGet('colors.teals.0')};
`;

const QuizBody = styled(Box)`
    background: ${themeGet('colors.teals.2')};
`;

class Quiz extends React.Component {
    constructor() {
        super();
        const answers = shuffle(QUIZ_FISH).slice(0, NUM_QUIZ_QUESTIONS);
        const choices = answers.map(fish => {
            const otherFish = QUIZ_FISH.filter(
                a => a.commonName !== fish.commonName
            );
            const wrongChoices = shuffle(otherFish).slice(0, 2);
            return shuffle(wrongChoices.concat(fish));
        });
        this.state = {
            currentResult: null,
            results: [],
            question: 0,
            answers,
            choices,
        };
    }

    checkResults = result => {
        this.setState({
            currentResult: result,
            results: this.state.results.concat(result),
        });

        setTimeout(() => {
            const { dispatch } = this.props;
            if (this.state.question === NUM_QUIZ_QUESTIONS - 1) {
                dispatch(saveQuizResults(this.state.results));
                dispatch(hideQuiz());
            } else
                this.setState({
                    currentResult: null,
                    question: this.state.question + 1,
                });
        }, GUESS_MESSAGE_TIME);
    };

    render() {
        const {
            choices,
            currentResult,
            results,
            question,
            answers,
        } = this.state;

        const answer = answers[question];

        const correctGuess =
            currentResult !== null && currentResult.numWrong < 2;
        const quizState =
            currentResult !== null ? (
                <QuizGuess answer={answer} correct={correctGuess} />
            ) : (
                <QuizContainer>
                    <QuizSidebar fish={answer} width={1 / 5} />
                    <QuizBody width={4 / 5}>
                        <QuizQuestion
                            answer={answer}
                            choices={choices[question]}
                            onDone={this.checkResults}
                        />
                    </QuizBody>
                </QuizContainer>
            );

        return (
            <Box>
                <QuizNavbar
                    dispatch={this.props.dispatch}
                    question={question}
                    results={results}
                />
                {quizState}
            </Box>
        );
    }
}

export default Quiz;
