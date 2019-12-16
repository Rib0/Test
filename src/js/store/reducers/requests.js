const initialState = {
    fetchingStatements: false,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'TOGGLE_FETCH_STATEMENTS':
            return { ...state, fetchingStatements: payload };
        default:
            return state;
    }
};
