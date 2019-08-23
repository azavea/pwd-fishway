import { arrayOf, func } from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';
import { themeGet } from 'styled-system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from './custom-styled-components';

import QuizOption from './QuizOption';
import QuizHint from './QuizHint';

import { QuizFish } from '../util/QuizFish';
import { Fish } from '../util/Fish';

const StyledQuizQuestion = styled(Flex)`
    height: calc(100vh - ${themeGet('navHeight')});
    flex-direction: column;
    justify-content: center;
`;

const Options = styled(Flex)`
    top: ${themeGet('navHeight')};
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    > div:nth-child(2n) img {
        animation-delay: 0.75s;
    }

    > div:nth-child(3n) img {
        animation-delay: 1.25s;
    }
`;

const StyledHintButton = styled(Button)`
    position: absolute;
    padding: ${themeGet('space.compact')};
    right: ${themeGet('space.normal')};
    bottom: ${themeGet('space.normal')};
`;

const StyledQuizOption = styled(QuizOption)`
    flex: 0 0 40%;
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

        let hint = answer.hint;
        if (guessed.length > 0) {
            hint = 'Almost! ' + hint;
        }

        const hintTag = showHint ? (
            <QuizHint hint={hint} />
        ) : (
            <StyledHintButton
                variant='link'
                onClick={() => this.setState({ usedHint: true })}
            >
                <FontAwesomeIcon icon={['fas', 'info-circle']} />
                &nbsp;Give me a hint
            </StyledHintButton>
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
