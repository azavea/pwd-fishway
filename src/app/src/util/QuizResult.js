import { bool, oneOf, shape } from 'prop-types';

export const QuizResult = shape({
    numWrong: oneOf([0, 1, 2]).isRequired,
    usedHint: bool.isRequired,
});
