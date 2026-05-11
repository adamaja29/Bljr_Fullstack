import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate ();

    const handleLogin = async(e) => {
        e.preventDefault();

        try {
            const  response = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });

            const data = await response.json();

            console.log(data);

            if (response.ok) {
                if(data.role === "admin") {
                    navigate("/admin/dashboard");
                } else if (data.role === "user") {
                    navigate("/user/dashboard");
                }
            } else {
                alert(data.msg);
            }
        } catch (error) {
            console.log(error);
        }
    }

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