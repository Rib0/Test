import { combineReducers } from 'redux';

import statements from './statements';
import requests from './requests';

export default combineReducers({
    statements,
    requests,
});
