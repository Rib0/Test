import { createSelector } from 'reselect';

const tasksSelector = ({ statements: { items } }) => items;

const currentStatementIdSelector = ({ statements: { currentStatementId } }) => currentStatementId;

export const getTasks = createSelector(
    [tasksSelector],
    tasks => tasks
);

export const getCurrentStatement = createSelector(
    [tasksSelector, currentStatementIdSelector],
    (tasks, currentStatementId) => tasks.find(task => task.id === currentStatementId)
);
