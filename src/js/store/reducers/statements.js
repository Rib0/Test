import { createReducer } from 'redux-act';
import { getStatements, addStatement, editStatement, changeCurrent } from 'store/actions';

const initialState = {
    currentStatementId: null,
    items: [],
};

export default createReducer(
    {
        [getStatements]: (state, payload) => ({
            ...state,
            items: payload,
        }),

        [addStatement]: (state, payload) => ({
            ...state,
            items: [...state.items, payload],
        }),

        [editStatement]: (state, payload) => ({
            ...state,
            items: state.items.map(item => (item.id === payload.id ? payload : item)),
        }),

        [changeCurrent]: (state, payload) => ({
            ...state,
            currentStatementId: payload,
        }),
    },
    initialState
);
