const authReducer = (state, action) => {
    switch(action.type) {
        case "LOGIN":
            return {
                ...state,
                userName: action.payload.name, token: action.payload.token, isAuth: action.payload.isAuth
            }
        case "LOGOUT":
            return {
                ...state,
                userName: "", token: "", isAuth: false
            }
        default:
            return state;
    }
}

export { authReducer };