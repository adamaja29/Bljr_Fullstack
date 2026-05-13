import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "./AuthContext";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const { login } = useAuth();

    const handleLogin = async (e) => {

        e.preventDefault();

        const result = await login(email, password);

        if(result.success){

            // 🔥 cek role
            if(result.user.role === "admin"){

                navigate("/admin/dashboard");

            } else {

                navigate("/user/dashboard");

            }

        } else {

            alert(result.message);

        }

    }

    return (
        <div>

            <h1>LOGIN</h1>

            <form onSubmit={handleLogin}>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br /><br />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <br /><br />

                <button type="submit">
                    Login
                </button>

            </form>

        </div>
    );
}

export default Login;