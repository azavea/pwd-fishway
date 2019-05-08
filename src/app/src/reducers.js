import { createReducer } from 'redux-act';
import update from 'immutability-helper';

import {
    hideScreensaver,
    saveAboutSlideIndex,
    resetAppState,
    resetTimer,
    pauseTimer,
} from './actions';
import { RESET, PAUSE } from './constants';

export const initialState = {
    aboutSlideIndex: 0,
    isScreensaverVisible: true,
    timerEvent: '',
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
    },
    initialState
);
