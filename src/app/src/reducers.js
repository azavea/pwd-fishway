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
    setActiveTab,
    showConnectionErrorMessage,
} from './actions';
import { RESET, PAUSE, ABOUT } from './util/constants';

export const initialState = {
    aboutSlideIndex: 0,
    isScreensaverVisible: false,
    timerEvent: '',
    isQuizVisible: true,
    backgroundPosition: 'top',
    quizScore: 0,
    secondsToCompleteQuiz: 0,
    activeTab: ABOUT,
    showConnectionError: false,
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
        [clearQuizScore]: state => update(state, { quizScore: { $set: 0 } }),
        [saveSecondsToCompleteQuiz]: (state, payload) =>
            update(state, { secondsToCompleteQuiz: { $set: payload } }),
        [setBackgroundPosition]: (state, payload) =>
            update(state, { backgroundPosition: { $set: payload } }),
        [setActiveTab]: (state, payload) =>
            update(state, { activeTab: { $set: payload } }),
        [showConnectionErrorMessage]: state =>
            update(state, { showConnectionError: { $set: true } }),
    },
    initialState
);
