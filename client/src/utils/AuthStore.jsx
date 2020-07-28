const AUTH_ACTIONS = {
    SET_USER: "set-user",
};

const auth = {
    currentUser: {}
}

const authReducer = (auth, action) => {
    switch (action.type) {
        case AUTH_ACTIONS.SET_USER:
            return {
                ...auth, currentUser: action.payload
            }
        default: 
            break;
    }
    
};

export { authReducer, auth, }