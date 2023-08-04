import styles from "./ShoppingCart.module.css";
import ShoppingCartItem from "./ShoppingCartItem";
import React from 'react';

export default function ShoppingCart({ cart, setCart }) {
    console.log(cart)
    const cartItems = cart.map(cartItem => {
        const { id, title, price, image, quantity } = cartItem;

        return (
            <React.Fragment key={id}>
                <ShoppingCartItem cart={cart} setCart={setCart} title={title} price={price} image={image} quantity={quantity} id={id} />
            </React.Fragment>
        )
    });

    return (
        <main className={styles.cartContainer}>
            {cartItems}
        </main >
    )
}