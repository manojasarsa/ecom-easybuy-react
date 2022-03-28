const authReducer = (state, action) => {
    switch(action.type) {
        case "LOGIN":
            return {
                ...state,
                userName: action.payload.userName, token: action.payload.token, isAuth: action.payload.isAuth
            }
        case "LOGOUT":
            return {
                ...state,
                userName: "", token: "", isAuth: false
            }
        default:
            console.log("Error Occured!");   // will display the error page later
    }
}

export { authReducer };