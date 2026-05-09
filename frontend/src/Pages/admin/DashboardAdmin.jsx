import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <h1>HOME</h1>

            <button onClick={() => navigate('/admin/users')}>
                Data
            </button>
        </>
    );
}

export default Home;