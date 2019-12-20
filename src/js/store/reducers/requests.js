import { createReducer } from 'redux-act';
import { toggleFetchStatements } from 'store/actions';

const initialState = {
    fetchingStatements: false,
};

export default createReducer(
    {
        [toggleFetchStatements]: (state, payload) => ({
            ...state,
            fetchingStatements: payload,
        }),
    },
    initialState
);
