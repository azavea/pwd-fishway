import shuffle from 'lodash/shuffle';
import React from 'react';
import styled from 'styled-components';
import { Box, Flex } from 'rebass';
import { themeGet } from 'styled-system';

import QuizNavbar from './QuizNavbar';
import QuizGuess from './QuizGuess';
import QuizQuestion from './QuizQuestion';
import QuizSidebar from './QuizSidebar';
import QuizBadge from './QuizBadge';

import {
    QUIZ_FISH,
    FISH_CATALOG,
    GUESS_MESSAGE_TIME,
    NUM_QUIZ_QUESTIONS,
} from '../util/constants';
import { hideQuiz, saveQuizScore } from '../actions';

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
            // draw answers from the full fish catalog for more variety
            const otherFish = FISH_CATALOG.filter(
                a => a.commonName !== fish.commonName
            );
            const wrongChoices = shuffle(otherFish).slice(0, 2);
            return shuffle(wrongChoices.concat(fish));
        });
        this.state = {
            currentResult: null,
            results: [],
            question: 0,
            score: 0,
            answers,
            choices,
        };
    }

    checkResults = result => {
        let pointsGained = 0;

        const { numWrong, usedHint } = result;
        if (numWrong === 0 && !usedHint) {
            pointsGained += 100;
        } else if (numWrong === 0) {
            pointsGained += 80;
        } else if (numWrong === 1) {
            pointsGained += 60;
        }

        this.setState(prevState => ({
            score: prevState.score + pointsGained,
            currentResult: result,
            results: prevState.results.concat(result),
        }));

        setTimeout(() => {
            const { dispatch } = this.props;
            if (this.state.question === NUM_QUIZ_QUESTIONS - 1) {
                dispatch(saveQuizScore(this.state.score));
                dispatch(hideQuiz());
            } else
                this.setState(prevState => ({
                    currentResult: null,
                    question: prevState.question + 1,
                }));
        }, GUESS_MESSAGE_TIME);
    };

    render() {
        const {
            choices,
            currentResult,
            score,
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
                    isQuestionActive={currentResult === null}
                />
                <QuizBadge dispatch={this.props.dispatch} score={score} />
                {quizState}
            </Box>
        );
    }
}

export default Quiz;
