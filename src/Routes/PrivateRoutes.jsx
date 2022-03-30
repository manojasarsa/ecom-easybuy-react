import { useAuth } from "../contexts/authContext";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const { state } = useAuth();

    return state.isAuth ? children : <Navigate to="/login" />;
}

export {PrivateRoutes};