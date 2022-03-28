import { createContext, useReducer, useContext } from "react";
import axios from "axios";
import { authReducer } from "../reducer/authReducer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AuthContext = createContext();

const initialState = {
    userName: JSON.parse(localStorage.getItem("jwtToken"))?.userName || "",
    token: JSON.parse(localStorage.getItem("jwtToken"))?.token || "",
    isAuth: JSON.parse(localStorage.getItem("jwtToken"))?.isAuth || false,
}

const AuthProvider = ({children}) => {

    const [error, setError] = useState("");
    const [errorState, setErrorState] = useState(false);
    const [state, dispatch] = useReducer( authReducer, initialState);
    const navigate = useNavigate();

    const signup = async ({firstName, lastName, email, password}) => {
        try {
            const response = await axios.post("/api/auth/signup", {firstName, lastName, email, password});

            if(response.status === 201) {
                const fName = response.data.createdUser.firstName;
                const encodedToken = response.data.encodedToken;

                localStorage.setItem("jwtToken", JSON.stringify({userName: fName, token: encodedToken, isAuth: true}));
                dispatch({type: "LOGIN", payload: {name: fName, token: encodedToken, isAuth: true},});
                navigate("/");
            }
        } catch (error) {
            setError(error.response.data.errors);
            setErrorState(true);
            setTimeout(() => {
                setErrorState(false);
            }, 3000);
        }
    }

    const login = async ({email, password}) => {
        try{
            const response = await axios.post("/api/auth/logi", {email, password});
            
            if(response.status === 200) {
                const fName = response.data.foundUser.firstName;
                const encodedToken = response.data.encodedToken;

                localStorage.setItem("jwtToken", JSON.stringify({userName: fName, token: encodedToken, isAuth: true}));
                dispatch({type: "LOGIN", payload: {name: fName, token: encodedToken, isAuth: true},});
                navigate("/");
             }

        } catch(error) {
            setError(error.response.data.errors);
            setErrorState(true);
            setTimeout(() => {
                setErrorState(false);
            }, 3000);
        }
    }
    
    const logout = async () => { 
        dispatch({type: "LOGOUT"});
        localStorage.removeItem("jwtToken");
    }

    return (
        <AuthContext.Provider value={{state, dispatch, signup, login, logout, error, setError, errorState, setErrorState}}>
            {children}
        </AuthContext.Provider>
    );
}

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };