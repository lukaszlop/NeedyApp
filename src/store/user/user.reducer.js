const user = {
    email: null
}

export const userReducer = (state = user, action) => {
    switch (action.type) {
        case 'LOG_USER':
            const {
                payload: {
                    email
                }
            } = action;
            return {
                ...state, email
            };
        default:
            return state;
    }
}