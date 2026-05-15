import {
    createContext,
    useContext,
    useState,
    useEffect
} from "react";

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);

    if(!context){
        throw new Error("useAuth must be used within AuthProvider");
    }

    return context;
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

        const fetchUser = async () => {
    try {
      const response = await fetch('http://localhost:5000/me', {
        credentials: 'include',
      });
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {

    fetchUser();

}, []);

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
            if(response.ok){

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

    const logout = async() => {
        await fetch('http://localhost:5000/logout', {
            method: 'DELETE',
            credentials: 'include'
        });
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{
            user,
            login,
            logout,
            loading
        }}>

            {children}

        </AuthContext.Provider>
    );
}