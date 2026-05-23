import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

const DashboardUser = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();
    
    const handleLogout = async () => {
         await logout();
         navigate("/");
        }

    return (
        <>
            <h1>HOME USER</h1>

            <button onClick={() => navigate('/user/products')}>Products</button>

            <br />
            <br />

            <button onClick={handleLogout}>
                Logout
            </button>
        </>
    );
}

export default DashboardUser;