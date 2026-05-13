import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

// CUSTOM HOOK
export const useAuth = () => {

    const context = useContext(AuthContext);

    if(!context){
        throw new Error("useAuth must be used within AuthProvider");
    }

    return context;

}

// PROVIDER
export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    // LOGIN
    const login = async (email, password) => {

        try {

            const response = await fetch("http://localhost:5000/login", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                credentials: "include",

                body: JSON.stringify({
                    email,
                    password
                })

            });

            const userData = await response.json();

            // LOGIN BERHASIL
            if(response.ok){

                // 🔥 simpan user global
                setUser(userData);

                return {
                    success: true,
                    user: userData
                };

            } else {

                return {
                    success: false,
                    message: userData.msg || "Login Failed"
                };

            }

        } catch (error) {

            console.log("Login Error:", error);

            return {
                success: false,
                message: "Network Error"
            };

        }

    };

    return (

        <AuthContext.Provider value={{
            user,
            login
        }}>

            {children}

        </AuthContext.Provider>

    );

}