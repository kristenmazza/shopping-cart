import styles from "./ShoppingCartItem.module.css";

export default function ShoppingCartItem({ cart, setCart, title, price, image, quantity, id }) {

    const handleCartQuantityDecrease = () => {
        const currentCartIndex = cart.findIndex((item) => item.id === id);
        if (quantity <= 1) {
            quantity = 1;
        } else {
            quantity -= 1;
        }

        const updatedProduct = { ...cart[currentCartIndex], "quantity": quantity };
        const updatedItems = [...cart.slice(0, currentCartIndex), updatedProduct, ...cart.slice(currentCartIndex + 1)];
        setCart(updatedItems);
        console.log(updatedItems);
    }

    const handleCartQuantityIncrease = () => {
        const currentCartIndex = cart.findIndex((item) => item.id === id);
        quantity += 1;

        const updatedProduct = { ...cart[currentCartIndex], "quantity": quantity };
        const updatedItems = [...cart.slice(0, currentCartIndex), updatedProduct, ...cart.slice(currentCartIndex + 1)];
        setCart(updatedItems);
        console.log(updatedItems);
    }

    const handleCartQuantityInputChange = (e) => {
        const currentCartIndex = cart.findIndex((item) => item.id === id);
        const updatedProduct = { ...cart[currentCartIndex], "quantity": Number(e.target.value) };
        const updatedItems = [...cart.slice(0, currentCartIndex), updatedProduct, ...cart.slice(currentCartIndex + 1)];
        setCart(updatedItems);
        console.log(updatedItems);
    }

    const handleDeleteCartItem = () => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
    }

    return (
        <>
            <div className={styles.cartItemCard}>
                <div className={styles.imageContainer}>
                    <img className={styles.cartItemImg} src={image} />
                </div>
                <div className={styles.cartItemDetails}>
                    <h2 className={styles.name}>{title}</h2>
                    <p className={styles.price}>${price}</p>
                    <div className={styles.cartItemQuantityOptions}>
                        <div className={styles.counter}>
                            <button type="button" id="sub" className={styles.sub} onClick={() => handleCartQuantityDecrease()}>-</button>
                            <input type="text" id="1" min="0" value={quantity || "1"} onChange={(e) => handleCartQuantityInputChange(e)} className={styles.field} />
                            <button type="button" id="add" className={styles.add} onClick={() => handleCartQuantityIncrease()}>+</button>
                        </div >
                        <button onClick={() => handleDeleteCartItem()}>Remove</button>

                    </div>
                </div>
            </div>
        </>
    )
}