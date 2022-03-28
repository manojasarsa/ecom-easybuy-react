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

    const [state, dispatch] = useReducer(authReducer, initialState);
    const [customer, setCustomer] = useState("");
    const navigate = useNavigate();

    const signup = async ({firstName, lastName, email, password, setError, setErrorState}) => {
        try {
            const response = await axios.post("/api/auth/signup", {
                firstName: firstName, 
                lastName: lastName, 
                email: email, 
                password: password
            });

            if(response.status === 201) {
                
                const {fName} = response.data.createdUser;
                const {encodedToken} = response.data;
                setCustomer(response.data.createdUser.firstName);

                localStorage.setItem("jwtToken", JSON.stringify({userName: fName, token: encodedToken, isAuth: true}));
                dispatch({ type: "LOGIN", payload: {userName: fName, token: encodedToken, isAuth: true },});
                navigate("/");
            }
        } catch (err) {
            setError(err.response.data.errors);
            setErrorState(true);
        }
    }

    const login = async ({email, password, setError, setErrorState}) => {
        console.log("email:", email)
        console.log("password:", password)
        try{
            const response = await axios.post("/api/auth/login", {
                email: email, 
                password: password
            });
            if(response.status === 200) {
                const {fName} = response.data.foundUser;
                const {encodedToken} = response.data;

                localStorage.setItem("jwtToken", JSON.stringify({userName: fName, token: encodedToken, isAuth: true}));
                dispatch({type: "LOGIN", payload: {userName: fName, token: encodedToken, isAuth: true},});
                navigate("/");
             }

        } catch(err) {
            console.log("email:", email)
            console.log("password:", password)
            console.log(err.response.data.errors)
            setError(err.response.data.errors);
            setErrorState(true);
            
        }
    }
    
    const logout = async () => { 
        dispatch({type: "LOGOUT"});
        localStorage.removeItem("jwtToken");
    }

    return (
        <AuthContext.Provider value={{state, dispatch, signup, login, logout, customer}}>
            {children}
        </AuthContext.Provider>
    );
}

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };