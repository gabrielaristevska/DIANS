import React from 'react';
import {Navigate, Outlet} from "react-router";
import {useAuth} from "../context/AuthContext";

function ProtectedRoute() {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated()) {
        return <Navigate to="/login" />;
    }

    return (
        <Outlet />
    );
}

export default ProtectedRoute;