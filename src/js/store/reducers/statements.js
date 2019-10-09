const initialState = {
    currentStatement: 0,
    items: [],
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'GET_STATEMENTS':
            return { ...state, items: [...payload] };
        case 'ADD_STATEMENT':
            return { ...state, items: [...state.items, payload] };
        case 'EDIT_STATEMENT':
            return {
                ...state,
                items: state.items.map(item => (item.id === payload.id ? payload : item)),
            };
        case 'CHANGE_CURRENT':
            return { ...state, currentStatement: payload };
        case 'GET_STATUSES':
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === payload.id ? { ...item, ...payload } : item
                ),
            };
        case 'GET_PRIORITIES':
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === payload.id ? { ...item, ...payload } : items
                ),
            };
        default:
            return state;
    }
};
