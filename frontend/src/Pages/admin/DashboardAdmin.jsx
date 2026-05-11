import { useNavigate } from "react-router-dom";

const DashboardAdmin = () => {
    const navigate = useNavigate();

    return (
        <>
            <h1>HOME ADMIN</h1>

            <button onClick={() => navigate('/admin/users')}>
                Data
            </button>
        </>
    );
}

export default DashboardAdmin;