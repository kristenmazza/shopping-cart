import styles from "./ShoppingCart.module.css";
import ShoppingCartItem from "./ShoppingCartItem";
import React from 'react';

export default function ShoppingCart({ cart, setCart }) {
    const cartItems = cart.map(cartItem => {
        const { id, title, price, image, quantity } = cartItem;

        return (
            <React.Fragment key={id}>
                <ShoppingCartItem
                    cart={cart}
                    setCart={setCart}
                    title={title}
                    price={price}
                    image={image}
                    quantity={quantity}
                    id={id}
                />
            </React.Fragment>
        )
    });

    return (
        <main className={styles.cartContainer}>
            <div className={styles.heading}><h2>Your Cart</h2></div>
            <div className={styles.cart}>
                <div className={styles.cartItems}>
                    {cartItems}
                </div>
                <div className={styles.orderSummary}>
                    <button>Checkout</button>
                </div>
            </div>
        </main >
    )
}