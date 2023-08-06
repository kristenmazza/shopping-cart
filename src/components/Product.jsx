import styles from "./Product.module.css";
import { useContext } from "react";
import { GlobalContext } from "../App";

function Product({ items, title, price, image, quantity, id, setItems }) {
    const { cart, setCart, setCartQuantity, total, setTotal } = useContext(GlobalContext);

    const updateTotal = (updatedCart) => {
        let total = 0;
        updatedCart.forEach(item => {
            total += (item.price * item.quantity);
        })
        setTotal(total);
    }

    const handleQuantityDecrease = () => {
        const currentProductIndex = items.findIndex((item) => item.id === id);
        if (quantity <= 1) {
            quantity = 1;
        } else {
            quantity -= 1;
        }
        const updatedProduct = { ...items[currentProductIndex], "quantity": quantity };
        const updatedItems = [...items.slice(0, currentProductIndex), updatedProduct, ...items.slice(currentProductIndex + 1)];
        setItems(updatedItems);
    };

    const handleQuantityIncrease = () => {
        const currentProductIndex = items.findIndex((item) => item.id === id);
        quantity += 1;

        const updatedProduct = { ...items[currentProductIndex], "quantity": quantity };
        const updatedItems = [...items.slice(0, currentProductIndex), updatedProduct, ...items.slice(currentProductIndex + 1)];
        setItems(updatedItems);
    };

    const sumCartQuantity = (updatedCart) => {
        let total = 0;
        updatedCart.forEach(item => {
            total += item.quantity;
        })
        setCartQuantity(total);
    }

    const handleAddToCart = () => {
        const currentProductIndex = items.findIndex((item) => item.id === id);
        const updatedProduct = { ...items[currentProductIndex], "quantity": quantity };
        const updatedItems = [...items.slice(0, currentProductIndex), updatedProduct, ...items.slice(currentProductIndex + 1)];
        setItems(updatedItems);

        let exists = false;

        let updatedCart = cart.map((cartItem) => {
            if (id === cartItem.id) {
                exists = true;
                return {
                    ...cartItem,
                    "quantity": quantity + cartItem.quantity
                }
            }
            return cartItem;
        })

        if (!exists) {
            updatedCart.push(updatedProduct)
        }

        setCart(updatedCart);
        sumCartQuantity(updatedCart);
        updateTotal(updatedCart);
    }

    const handleQuantityInputChange = (e) => {
        const currentProductIndex = items.findIndex((item) => item.id === id);
        const updatedProduct = { ...items[currentProductIndex], "quantity": Number(e.target.value) };
        const updatedItems = [...items.slice(0, currentProductIndex), updatedProduct, ...items.slice(currentProductIndex + 1)];
        setItems(updatedItems);
    }

    return (
        <div className={styles.productCard}>
            <img className={styles.productImage} src={image} />
            <div className={styles.productDetails}>
                <h2 className={styles.name}>{title}</h2>
                <p>${price.toFixed(2)}</p>
            </div >
            <div className={styles.row}>
                <div className={styles.counter}>
                    <button type="button" id="sub" className={styles.sub} onClick={() => handleQuantityDecrease()}>-</button>
                    <input type="text" id="1" min="0" value={quantity || "1"} onChange={(e) => handleQuantityInputChange(e)} className={styles.field} />
                    <button type="button" id="add" className={styles.add} onClick={() => handleQuantityIncrease()}>+</button>
                </div >
                <button className={styles.addCartButton} area-label="add to cart" onClick={() => handleAddToCart()}>Add to Cart</button>
            </div>
        </div >
    )
}

export default Product;