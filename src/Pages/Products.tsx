import { useState, useEffect, useRef } from "react";
import React from "react";
import Product from "../models/Product";
import ProductItem from "../components/ProductItem";

const Products: React.FC = () => {
    const [loadedProducts, setLoadedProducts] = useState<Product[]>([]);
    const [searchItem, setSearchItem] = useState("");
    const [value, setValue] = useState("category");

    const searchInput = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = searchInput.current!.value;

        setSearchItem(enteredText);

    };
    const handleChange = (event: any) => {
        setValue(event.target.value);
    };


    useEffect(() => {
        async function fetchProducts() {
            const response = await fetch('https://fakestoreapi.com/products');

            if (!response.ok) {
                return;
            }

            const products = await response.json();
            setLoadedProducts(products);

        }

        fetchProducts();
    }, []);

    let filteredProducts = loadedProducts;

    if (searchItem) {
        filteredProducts = loadedProducts.filter((product) => (product.description.toLowerCase().includes(searchItem.toLowerCase()) || product.title.toLowerCase().includes(searchItem.toLowerCase())))
    }

    if (value !== "category" && value !== "all") {
        filteredProducts = loadedProducts.filter((Product) => (Product.category === value));
    }

    const ListOfProducts = () => {

        if (loadedProducts.length > 0) {
            return (
                <div className="mt-[300px]">
                    <div className="flex flex-row justify-evenly my-10">
                        <form onSubmit={submitHandler} className="text-center flex flex-row">
                            <input type="text" id="text" ref={searchInput} className="border-2 rounded-md" placeholder="search..." />
                            <button className="bg-blue1 rounded-lg p-2 hover:bg-bermuda">Submit Search</button>
                        </form>
                        <select id="categories" name="categories" onChange={handleChange} value={value} className="rounded-md bg-midnight text-white text-center p-2">
                            <option value="category" disabled >category</option>
                            <option value="men's clothing" >men clothing</option>
                            <option value="jewelery">jewelery</option>
                            <option value="electronics">electronics</option>
                            <option value="women's clothing">women clothing</option>
                            <option value="all">all</option>
                        </select>
                    </div>



                    <ul className="flex flex-wrap justify-evenly">
                        {filteredProducts.map((product) => (
                            <ProductItem key={product.id} product={product} />
                        ))}
                    </ul>

                </div>

            );

        }
        else {
            return (
                <p className="text-l text-center text-darkGrey mt-[300px]">loading data...</p>
            );
        }

    };

    return (
        <ListOfProducts />
    );
};
export default Products;