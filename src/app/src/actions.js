import { createAction } from 'redux-act';

export const hideScreensaver = createAction('Hide screensaver');
export const showScreensaver = createAction('Show screensaver');

export const saveAboutSlideIndex = createAction('Change About slide index');
