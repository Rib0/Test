// statements

export const getStatements = payload => ({ type: 'GET_STATEMENTS', payload });

export const changeCurrent = payload => ({ type: 'CHANGE_CURRENT', payload });

export const addStatement = payload => ({ type: 'ADD_STATEMENT', payload });

export const editStatement = payload => ({ type: 'EDIT_STATEMENT', payload });

export const getStatuses = payload => ({ type: 'GET_STATUSES', payload });

export const getPriorities = payload => ({ type: 'GET_PRIORITIES', payload });

// requests

export const toggleFetchStatements = payload => ({ type: 'TOGGLE_FETCH_STATEMENTS', payload });
