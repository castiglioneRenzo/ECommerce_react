'use client'
import { useState, useEffect, use } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";


function ItemListContainer(params) {
    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const url = `https://fakestoreapi.com/products/${id}`; // Fetching a specific product by ID

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setItem(data);
            })
            .catch((error) => console.error('Error fetching products:', error));
    }, [id]);
    
    return (
        <ItemDetail item = {item}/>
    )
}

export default ItemListContainer;