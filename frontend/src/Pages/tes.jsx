import {
    createContext,
    useContext,
    useState,
    useEffect
} from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    // 🔥 CEK SESSION LOGIN
    const checkAuth = async () => {

        try {

            const response = await fetch("http://localhost:5000/me", {

                method: "GET",

                credentials: "include"

            });

            const data = await response.json();

            if(response.ok){

                setUser(data);

            }

        } catch (error) {

            console.log(error);

        }

    }

    // 🔥 SAAT APP PERTAMA DIBUKA
    useEffect(() => {

        checkAuth();

    }, []);

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

            const data = await response.json();

            if(response.ok){

                setUser(data);

                return {
                    success: true,
                    user: data
                };

            } else {

                return {
                    success: false,
                    message: data.msg
                };

            }

        } catch (error) {

            return {
                success: false,
                message: "Server Error"
            };

        }

    }

    // LOGOUT
    const logout = async () => {

        await fetch("http://localhost:5000/logout", {

            method: "DELETE",

            credentials: "include"

        });

        setUser(null);

    }

    return (
        <AuthContext.Provider value={{
            user,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);