import { useState } from "react";
import axios from "axios";

const AddProduct = () => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const saveProduct = async(e) => {
        e.preventDefault();

        try {

            await axios.post("http://localhost:5000/product", {
                name: name,
                price: price
            });

            alert("Product berhasil ditambah");

        } catch (error) {
            console.log(error);
        }
    }

    return (
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

        </form>
    );
}

export default AddProduct;