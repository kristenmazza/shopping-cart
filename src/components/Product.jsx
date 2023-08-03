import styles from "./Product.module.css";

function Product({ title, price, image }) {
    return (
        <div className={styles.productCard}>
            <img className={styles.productImage} src={image} />
            <div className={styles.productDetails}>
                <h2 className={styles.name}>{title}</h2>
                <p>{price}</p>
            </div >
            <div className={styles.row}>
                <div className={styles.counter}>
                    <button type="button" id="sub" className={styles.sub}>-</button>
                    <input type="text" id="1" value="0" className={styles.field} />
                    <button type="button" id="add" className={styles.add}>+</button>
                </div >
                <button className={styles.addCartButton}>Add to Cart</button>
            </div>
        </div >
    )
}

export default Product;