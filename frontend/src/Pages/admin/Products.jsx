import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
    const navigate = useNavigate();
    const [product, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        try{
            const response = await fetch("http://localhost:5000/products", 
                {
                    credentials: "include"
                }
            );
            const data = await response.json();

            setProducts(data);
        } catch (error) {
            console.log (error);
        }
    };

    return (
        <>
            <button onClick={() => navigate ("/admin/dashboard")}>
                Kembali
            </button>

            <h1>Data Products</h1>

            <table border="1" cellPadding={5}>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Harga</th>
                        <th>User</th>
                    </tr>
                </thead>

                <tbody>
                    {product.map((product, index) => (
                    <tr key={product.id}>
                        <td>{index + 1}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.user.name}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Products;