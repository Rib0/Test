/* eslint-disable */

import { getStatements, getPriorities, getStatuses, toggleFetchStatements } from 'store/actions';
import { request } from 'utils';

export const getStatementsApi = () => dispatch => {
    dispatch(toggleFetchStatements(true));
    request({
        url: `${_API_NK}odata/tasks?tenantguid=${_KEY}`,
    })
        .finally(() => dispatch(toggleFetchStatements(false)))
        .then(({ value }) => {
            dispatch(getStatements(value));
        });
};

export const getPrioritiesApi = () => dispatch => {
    request(`${_API}Priorities`).then(resp => dispatch(getStatuses(resp)));
};

export const getStatusesApi = () => dispatch => {
    request(`${_API}Statuses`).then(resp => dispatch(getStatuses(resp)));
};

export const getTagsApi = () => dispatch => {
    request(`${_API}Tags`).then(() => dispatch(getStatuses(resp)));
};

export const getServicesApi = () => dispatch => {
    request(`${_API}Services`).then(resp => dispatch(getStatuses(resp)));
};
