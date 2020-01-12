import { createSelector } from 'reselect';

const tasksSelector = ({ statements: { items } }) => items;

export const getTasks = createSelector(
    [tasksSelector],
    tasks => tasks
); // для больших вычеслений
