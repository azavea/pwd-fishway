import { createReducer } from 'redux-act';
import update from 'immutability-helper';

import {
    hideScreensaver,
    saveAboutSlideIndex,
    resetAppState,
    resetTimer,
    pauseTimer,
    showQuiz,
    hideQuiz,
    saveQuizScore,
    clearQuizScore,
    saveSecondsToCompleteQuiz,
    setBackgroundPosition,
} from './actions';
import { RESET, PAUSE } from './util/constants';

export const initialState = {
    aboutSlideIndex: 0,
    isScreensaverVisible: true,
    timerEvent: '',
    isQuizVisible: false,
    backgroundPosition: 'top',
    quizScore: null,
    secondsToCompleteQuiz: 0,
};

export default createReducer(
    {
        [saveAboutSlideIndex]: (state, payload) =>
            update(state, { aboutSlideIndex: { $set: payload } }),
        [hideScreensaver]: state =>
            update(state, {
                isScreensaverVisible: { $set: false },
                backgroundPosition: { $set: 'bottom' },
            }),
        [resetAppState]: state => update(state, { $set: initialState }),
        [resetTimer]: state => update(state, { timerEvent: { $set: RESET } }),
        [pauseTimer]: state => update(state, { timerEvent: { $set: PAUSE } }),
        [showQuiz]: state => update(state, { isQuizVisible: { $set: true } }),
        [hideQuiz]: state => update(state, { isQuizVisible: { $set: false } }),
        [saveQuizScore]: (state, payload) =>
            update(state, { quizScore: { $set: payload } }),
        [clearQuizScore]: state => update(state, { quizScore: { $set: null } }),
        [saveSecondsToCompleteQuiz]: (state, payload) =>
            update(state, { secondsToCompleteQuiz: { $set: payload } }),
        [setBackgroundPosition]: (state, payload) =>
            update(state, { backgroundPosition: { $set: payload } }),
    },
    initialState
);
