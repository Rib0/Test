import { createAction } from 'redux-act';

// statements

export const getStatements = createAction('get statements');

export const changeCurrent = createAction('change current');

export const addStatement = createAction('add statement');

export const editStatement = createAction('edit statement');

export const getStatuses = createAction('get statuses');

export const getPriorities = createAction('get priorities');

// requests

export const toggleFetchStatements = createAction('toggle fetch statements');
