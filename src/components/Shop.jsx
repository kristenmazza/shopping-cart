import styles from "./Shop.module.css";
import ProductList from "./ProductList";

function Shop({ cart, setCart }) {
    return (
        <main className={styles.shopContainer}>
            {/* <div className={styles.productNav}>
                <span>Home</span><span>&#8250;</span><span>Shop</span><span>&#8250;</span><span>All</span>
            </div> */}
            <ProductList cart={cart} setCart={setCart} />
        </main>
    )
}

export default Shop;