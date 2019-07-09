import { createAction } from 'redux-act';

export const hideScreensaver = createAction('Hide screensaver');
export const resetAppState = createAction('Reset default app state');
export const saveAboutSlideIndex = createAction('Change About slide index');
export const resetTimer = createAction('Reset timer');
export const pauseTimer = createAction('Pause timer');
export const showQuiz = createAction('Show quiz');
export const hideQuiz = createAction('Hide quiz');
export const saveQuizScore = createAction('Save final quiz score');
export const clearQuizScore = createAction('Clear final quiz score');
export const saveSecondsToCompleteQuiz = createAction(
    'Save seconds elapsed to complete the quiz'
);
export const setBackgroundPosition = createAction('Set Background position');
export const setActiveTab = createAction('Set active tab');
