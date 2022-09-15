import { makeVar } from '@apollo/client';

export const toDoListVar = makeVar([]);

// TODO: make a 'you've wasted x seconds on this page'
export const timerVar = makeVar(0);