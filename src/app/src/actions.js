import { createAction } from 'redux-act';

export const hideScreensaver = createAction('Hide screensaver');
export const resetAppState = createAction('Reset default app state');
export const saveAboutSlideIndex = createAction('Change About slide index');
export const resetTimer = createAction('Reset timer');
export const pauseTimer = createAction('Pause timer');
