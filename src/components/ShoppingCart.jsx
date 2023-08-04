import styles from "./ShoppingCart.module.css";
import ShoppingCartItem from "./ShoppingCartItem";
import React from 'react';
import { useNavigate } from "react-router-dom";

export default function ShoppingCart({ cart, setCart }) {
    const navigate = useNavigate();

    if (cart.length >= 1) {
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
    } else {
        return (
            <main className={styles.cartContainer}>
                <div className={styles.emptyCart}>
                    <h2>Your cart is empty</h2>
                    <p>Add some items to your cart and let the fun begin.</p>
                    <img className={styles.cartImg} alt="Shopping cart" src="/public/images/cart.png" />
                    <button className={styles.shopButton} onClick={() => navigate('/shop')}>Start Shopping</button>
                </div>
            </main>
        )
    }
}