import { useNavigate } from "react-router-dom";

import { useAuth } from "../auth/AuthContext";

const DashboardAdmin = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate("/");
    }

    return (

        <>

            <h1>HOME ADMIN</h1>

            <button onClick={() => navigate('/admin/users')}>
                Data
            </button>

            <br />

            <button onClick={handleLogout}>
                Logout
            </button>

        </>

    );

}

export default DashboardAdmin;