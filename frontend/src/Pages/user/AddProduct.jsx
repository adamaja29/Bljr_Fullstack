import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const saveProduct = async (e) => {
        e.preventDefault();
    

        try {
            await axios.post("http://localhost:5000/product",
                { 
                    name: name,
                    price: price
                },
                {
                    withCredentials: true
                }
            );
             navigate("/user/products");
        } catch (error) {   
            console.log(error);
        }
    }

    return (
        <>
            <button onClick={() => navigate ("/user/products")}>Kembali</button>
            <br />
            <br />

            <form onSubmit={saveProduct}>
                <input type="text" placeholder="Nama Product" value={name} 
                onChange={(e) => setName(e.target.value)} />

                <input type="text" placeholder="Harga" value={price} 
                onChange={(e) => setPrice(e.target.value)} />
                <br />
                <br />
                <button type="submit">Simpan</button>
            </form>
        </>
    )
}

export default AddProduct;