import { createContext, useContext, useEffect, useState } from "react";


export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const authorizationtoken = `Bearer ${token}`;
    const storeTokenInLS = (token) => {
        setToken(token);
        return localStorage.setItem("token", token);
    }

    // tackling the logout functionality
    const isLoggedIn = !!token;

    const logoutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    }

    //jwt Authentication - to get currently logged in user
    const userAuthentication = async () => {
        setIsLoading(true);
        try {
            const response = await fetch("http://127.0.0.1:3000/api/auth/user",
                {
                    method: "GET",
                    headers: {
                        Authorization: authorizationtoken,
                    },
                });
            if (response.status === 200) {
                const data = await response.json();
                setUser(data.userData);
                setIsLoading(false);
            }
        } catch (error) {
            console.error("error", error);
            setIsLoading(false);
        }
    }

    //fetch service data from server
    const [serviceData, setServiceData] = useState([])

    const serviceDataServer = async () => {
        try {
            const response = await fetch("http://127.0.0.1:3000/api/data/service",
                {
                    method: "GET",
                });
            if (response.status === 200) {
                const data = await response.json();
                setServiceData(data.msg);
            }
            else {
                console.log({ serviceMessage: "something went wrong" });
            }
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        userAuthentication();
        serviceDataServer();
    }, [])

    return (
        <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, logoutUser, user, serviceData, authorizationtoken, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth used outside of the provider");
    }
    return authContextValue;
};