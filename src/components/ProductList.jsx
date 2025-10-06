import { useState, useEffect } from "react";

import ProductCard from "./ProductCard";

export default function ProductList() {
    const [prodotti, setProducts] = useState([]);

    function fetchProducts() {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => setProducts(res.data))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div className="container">
            <h1>Lista Prodotti</h1>
            <div className="prodotti">
                {prodotti.map((prodotto) => (
                    <ProductCard
                        key={prodotto.id}
                        prodotto={prodotto}
                    />
                ))}
            </div>
        </div>
    )
}