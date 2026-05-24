import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const navigate = useNavigate();

    const saveProduct = async(e) => {
        e.preventDefault();

        try {

            await axios.post(
                "http://localhost:5000/product",
                {
                    name: name,
                    price: price
                },
                {
                    withCredentials: true
                }
            );

            // pindah halaman setelah berhasil
            navigate("/admin/products");

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
        <button onClick={() => navigate("/admin/products")}>
            Batal
        </button>
        <br />
        <br />
        <form onSubmit={saveProduct}>

            <input
                type="text"
                placeholder="Nama Product"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="text"
                placeholder="Harga"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />

            <button type="submit">
                Simpan
            </button>

        </form></>
        
    );
}

export default AddProduct;