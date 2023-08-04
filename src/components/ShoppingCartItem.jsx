import styles from "./ShoppingCartItem.module.css";

export default function ShoppingCartItem({ cart, setCart, title, price, image, quantity, id }) {
    return (
        <>
            <div className={styles.heading}><h2>Your Cart</h2></div>
            <div className={styles.cart}>
                <div className={styles.cartItems}>
                    <div className={styles.cartItemCard}>
                        <img className={styles.cartItemImg} src={image} />
                        <div className={styles.cartItemDetails}>
                            <h2 className={styles.name}>{title}</h2>
                            <p className={styles.price}>${price}</p>
                            <div className={styles.cartItemQuantityOptions}>
                                <button>Remove</button>
                                <div className={styles.counter}>
                                    <button type="button" id="sub" className={styles.sub} onClick={() => handleQuantityDecrease()}>-</button>
                                    <input type="text" id="1" min="0" value={quantity || "1"} onChange={(e) => handleQuantityInputChange(e)} className={styles.field} />
                                    <button type="button" id="add" className={styles.add} onClick={() => handleQuantityIncrease()}>+</button>
                                </div >
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.orderSummary}>
                    <button>Checkout</button>
                </div>
            </div>
        </>
    )
}