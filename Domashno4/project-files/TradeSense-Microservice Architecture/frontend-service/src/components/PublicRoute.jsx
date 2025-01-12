import {useAuth} from "../context/AuthContext";
import {Navigate, Outlet} from "react-router";

const PublicRoute = () => {
    const { isAuthenticated } = useAuth();

    // If authenticated, redirect to the home page
    if (isAuthenticated()) {
        return <Navigate to="/" />;
    }

    // Otherwise, allow access to the requested route
    return <Outlet />;
};

export default PublicRoute;