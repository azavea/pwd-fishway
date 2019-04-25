import { createReducer } from 'redux-act';
import update from 'immutability-helper';

import { hideScreensaver, showScreensaver } from './actions';

export const initialState = {
    isScreensaverVisible: true,
};

export default createReducer(
    {
        [hideScreensaver]: state =>
            update(state, { isScreensaverVisible: { $set: false } }),
        [showScreensaver]: state =>
            update(state, { isScreensaverVisible: { $set: true } }),
    },
    initialState
);
