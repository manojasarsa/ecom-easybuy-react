import { createContext, useReducer, useContext } from "react";
import axios from "axios";
import { authReducer } from "../reducer/authReducer";
// import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [state, dispatch] = useReducer( authReducer, { firstName: "", token: "" });

    // const navigate = useNavigate();

    

    const signup = async ({firstName, lastName, email, password}) => {

        try {
            const response = await axios.post("/api/auth/signup", {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
            });

            if(response.status === 201) {
                // console.log("response", response);
                const {createdUser} = response.data.createdUser;
                const encodedToken = response.data.encodedToken;
                localStorage.setItem("jwtToken", JSON.stringify({userInfo: createdUser, token: encodedToken}));
                dispatch({type: "LOGIN", payload: {userInfo: createdUser, token: encodedToken}});
                // navigate("/");
            }
        } catch (error) {
            
            // setPwdError(error);
            // console.log(pwdError);
            console.log("error recieved");
        }
    }

    // *** LOGIN *** //

    const login = async ({firstName, lastName, email, password}) => {
        
        try{

            const response = await axios.post("/api/auth/signup", {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
            });

            if(response.status === 200) {
                console.log("login-working")
            }

            // dispatch(type: "LOGIN", payload: {firstName: , token: })

        } catch(error) {
            console.log(error);
        }
    }

    // *** LOGOUT *** //
    
    const logout = async () => {
        try{

            // dispatch(type: "LOGOUT")

        } catch(error) {
            console.log(error);
        }
    }

    return (
        <AuthContext.Provider value={{state, dispatch, signup, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };