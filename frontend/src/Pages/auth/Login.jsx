import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
     const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const { login, user } = useAuth();

    useEffect(() => {

    if(user){

        if(user.role === "admin"){

            navigate("/admin/dashboard", {
                replace: true
            });

        } else {

            navigate("/user/dashboard", {
                replace: true
            });

        }

    }

}, [user, navigate]);

    const handleLogin = async (e) => {

  e.preventDefault();

  setLoading(true);

  setError("");

  const result = await login(email, password);

  if(result.success){

    if(result.user.role === "admin"){

      navigate("/admin/dashboard");

    } else {

      navigate("/user/dashboard");

    }

  } else {

    setError(result.message || "Login gagal");

  }

  setLoading(false);

};
    

    return (
        <div>
            <h1>LOGIN</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email</label>
                    <br />
                    <input type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <br />

                <div>
                    <label>Password</label>
                    <br />
                    <input type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>

                <br />

                <button>
                    login
                </button>
            </form>
        </div>
    );
}

export default Login;