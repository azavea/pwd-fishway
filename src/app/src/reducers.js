import { createReducer } from 'redux-act';
import update from 'immutability-helper';

import {
    hideScreensaver,
    saveAboutSlideIndex,
    showScreensaver,
} from './actions';

export const initialState = {
    aboutSlideIndex: 0,
    isScreensaverVisible: true,
};

export default createReducer(
    {
        [saveAboutSlideIndex]: (state, payload) =>
            update(state, { aboutSlideIndex: { $set: payload } }),
        [hideScreensaver]: state =>
            update(state, { isScreensaverVisible: { $set: false } }),
        [showScreensaver]: state =>
            update(state, {
                aboutSlideIndex: { $set: initialState.aboutSlideIndex },
                isScreensaverVisible: { $set: true },
            }),
    },
    initialState
);
