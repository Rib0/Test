// export const getStatementsApi = () => dispatch => {
//     fetch(`http://intravision-task.test01.intravision.ru/odata/tasks?tenantguid=${TENANT_GUID}`)
//         .then(resp => resp.json())
//         .then(console.log);
// };

// export const editStatementApi = () => dispatch => {};

// export const getPrioritiesApi = () => dispatch => {
//     fetch(`http://intravision-task.test01.intravision.ru/api/${TENANT_GUID}/Priorities`)
//         .then(resp => resp.json())
//         .then(console.log);
// };

export { getStatementsApi } from './statements';
