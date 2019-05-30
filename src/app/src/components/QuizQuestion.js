import { arrayOf, func } from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Button, Flex } from 'rebass';
import { themeGet } from 'styled-system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import QuizOption from './QuizOption';

import { QuizFish } from '../util/QuizFish';

const StyledQuizQuestion = styled(Flex)`
    text-align: center;
    background: ${themeGet('colors.teals.0')};
    flex-direction: column;
`;

const Options = styled(Flex)`
    flex-direction: row;
    flex-wrap: wrap;
    text-align: center;
`;

const StyledQuizOption = styled(QuizOption)`
    width: 50%;
    height: 50%;
    margin: auto;
`;

class QuizQuestion extends React.Component {
    constructor() {
        super();
        this.state = {
            guessed: [],
            usedHint: false,
        };
    }

    onOptionSelected(fish, idx) {
        const { answer, onDone } = this.props;
        const { guessed, usedHint } = this.state;

        if (guessed.includes(idx)) {
            return;
        }
        if (fish.commonName === answer.commonName) {
            onDone({ numWrong: guessed.length, usedHint });
        } else if (guessed.length === 1) {
            onDone({ numWrong: 2, usedHint });
        } else {
            this.setState({ guessed: guessed.concat(idx) });
        }
    }

    render() {
        const { answer, choices } = this.props;
        const { guessed, usedHint } = this.state;

        const showHint = guessed.length > 0 || usedHint;
        // TODO: Remove the default value here when we get hint text
        let hint = showHint
            ? answer.hint || `its ${answer.commonName}`
            : 'Get a hint';
        if (guessed.length > 0) {
            hint = 'Almost! ' + hint;
        }
        const options = choices.map((fish, idx) => (
            <StyledQuizOption
                key={idx}
                fish={fish}
                showImage={showHint}
                shadeImage={guessed.includes(idx)}
                onClick={() => this.onOptionSelected(fish, idx)}
            />
        ));

        return (
            <StyledQuizQuestion>
                <Options>{options}</Options>
                <Button onClick={() => this.setState({ usedHint: true })}>
                    <FontAwesomeIcon icon={['fas', 'info-circle']} />
                    &nbsp;
                    {hint}
                </Button>
            </StyledQuizQuestion>
        );
    }
}

QuizQuestion.propTypes = {
    answer: QuizFish.isRequired,
    choices: arrayOf(QuizFish.isRequired),
    onDone: func.isRequired,
};

export default QuizQuestion;
