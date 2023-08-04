import styles from "./Shop.module.css";
import ProductList from "./ProductList";

function Shop() {
    return (
        <main className={styles.shopContainer}>
            <ProductList />
        </main>
    )
}

export default Shop;