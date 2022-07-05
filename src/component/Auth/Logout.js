import { useEffect } from "react";
import { logout } from "./Services/AuthService";

const Logout = () => {
    useEffect(() => {
        logout();
        window.location = "/";
    }, []);
    return null;
};

export default Logout;
