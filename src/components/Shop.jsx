import styles from "./Shop.module.css";
import ProductList from "./ProductList";

function Shop() {
    return (
        <main className={styles.shopContainer}>
            <div className={styles.productNav}>
                <span>Home</span><span>&#8250;</span><span>Shop</span><span>&#8250;</span><span>All</span>
            </div>
            <ProductList />

        </main>
    )
}

export default Shop;