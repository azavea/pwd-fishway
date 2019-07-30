import { arrayOf, func } from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Button, Flex } from 'rebass';
import { themeGet } from 'styled-system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import QuizOption from './QuizOption';
import QuizHint from './QuizHint';

import { QuizFish } from '../util/QuizFish';
import { Fish } from '../util/Fish';

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

const GetHintButton = styled(Button)`
    background: transparent;
    width: fit-content;
    margin-left: auto;
`;

const StyledQuizOption = styled(QuizOption)`
    width: 45%;
    height: 45%;
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

        // TODO (Issue #96): Remove the default value here when we get hint text
        let hint = answer.hint || `it's ${answer.commonName}`;
        if (guessed.length > 0) {
            hint = 'Almost! ' + hint;
        }

        const hintTag = showHint ? (
            <QuizHint hint={hint} />
        ) : (
            <GetHintButton onClick={() => this.setState({ usedHint: true })}>
                <FontAwesomeIcon icon={['fas', 'info-circle']} />
                &nbsp;Give me a hint
            </GetHintButton>
        );

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
                {hintTag}
            </StyledQuizQuestion>
        );
    }
}

QuizQuestion.propTypes = {
    answer: QuizFish.isRequired,
    choices: arrayOf(Fish.isRequired),
    onDone: func.isRequired,
};

export default QuizQuestion;
