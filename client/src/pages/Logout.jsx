import React, { useEffect } from 'react';
import { useAuth } from "../store/auth";

const Logout = () => {
    const { logoutUser } = useAuth();
    useEffect(() => {
        logoutUser();
        logout();
    }, [logoutUser])
    const logout = () => {
        window.location.href = "/login";
    }
    return (
        <div>

        </div>
    )
}

export default Logout