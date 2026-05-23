import { Navigate } from "react-router-dom";
import { useAuth } from "../Pages/auth/AuthContext";

const ProtectRoute = ({ children, allowedRole }) => {

    const { user, loading } = useAuth();

    console.log(user);

    console.log(allowedRole);

    //tunggu fetch /me selesai
    if(loading){

        return <h1>Loading...</h1>

    }

    //belum login
    if(!user){

        return <Navigate to="/" />

    }

    //role salah
    if(user.role !== allowedRole){

        if(user.role === "user"){

            return <Navigate to="/user/dashboard" />

        }

        if(user.role === "admin"){

            return <Navigate to="/admin/dashboard" />

        }

    }

    return children;

}

export default ProtectRoute;