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
} from './actions';
import { RESET, PAUSE } from './util/constants';

export const initialState = {
    aboutSlideIndex: 0,
    isScreensaverVisible: true,
    timerEvent: '',
    isQuizVisible: false,
};

export default createReducer(
    {
        [saveAboutSlideIndex]: (state, payload) =>
            update(state, { aboutSlideIndex: { $set: payload } }),
        [hideScreensaver]: state =>
            update(state, { isScreensaverVisible: { $set: false } }),
        [resetAppState]: state => update(state, { $set: initialState }),
        [resetTimer]: state => update(state, { timerEvent: { $set: RESET } }),
        [pauseTimer]: state => update(state, { timerEvent: { $set: PAUSE } }),
        [showQuiz]: state => update(state, { isQuizVisible: { $set: true } }),
        [hideQuiz]: state => update(state, { isQuizVisible: { $set: false } }),
    },
    initialState
);
