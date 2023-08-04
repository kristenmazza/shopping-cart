import Product from "./Product";
import styles from "./ProductList.module.css";
import axios from "axios";
import { useEffect, useState } from 'react'
import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

function ProductList({ cart, setCart }) {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getItems = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                const newItems = response.data.map(item => ({ ...item, "quantity": 1 }))
                setItems(newItems);
                setError(null);
            } catch (err) {
                setError(err.message);
                setItems(null);
            } finally {
                setLoading(false);
            }
        }
        getItems();
    }, []);

    const productCards = items.map(item => {
        if (error) return <p>An error was encountered.</p>
        if (item.category === `men's clothing` || item.category === `women's clothing`) {
            const { id, title, price, image, quantity } = item;

            return (
                <React.Fragment key={id}>
                    <Product cart={cart} setCart={setCart} items={items} title={title} price={price} image={image} quantity={quantity} id={id} setItems={setItems} />
                </React.Fragment>
            )
        }
    });

    return (
        <div className={styles.productList}>
            {
                loading ? <ThreeDots
                    height="80"
                    width="80"
                    radius="9"
                    color="rgb(255, 99, 0)"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}
                    }
                    wrapperClassName=""
                    visible={true}
                />
                    : productCards
            }
        </div>
    )
}

export default ProductList;