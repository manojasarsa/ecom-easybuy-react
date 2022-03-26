const authReducer = (state, action) => {
    switch(action.type) {
        case "LOGIN":
            return {
                ...state,
                firstName: action.payload.userInfo, token: action.payload.token 
            }
        case "LOGOUT":
            return {
                ...state,
                userInfo: "", token: ""
            }
        default:
            return {}
    }
}

export { authReducer };