initialState = {
    count: 0
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state.count + 1;
        case 'DECREMENT':
            return state.count - 1;
        default:
        return state;
    }
}