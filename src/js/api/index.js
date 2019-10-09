const TENANT_GUID = '1737765d-268b-488b-ab6f-c3e7e242f557';

export const getStatementsApi = () => dispatch => {
    fetch(`http://intravision-task.test01.intravision.ru/odata/tasks?tenantguid=${TENANT_GUID}`)
        .then(resp => resp.json())
        .then(console.log);
};

export const editStatement = () => dispatch => {};

export const getStatusesApi = () => dispatch => {
    fetch(`http://intravision-task.test01.intravision.ru/api/${TENANT_GUID}/Statuses`)
        .then(resp => resp.json())
        .then(console.log);
};

export const getPrioritiesApi = () => dispatch => {
    fetch(`http://intravision-task.test01.intravision.ru/api/${TENANT_GUID}/Priorities`)
        .then(resp => resp.json())
        .then(console.log);
};
