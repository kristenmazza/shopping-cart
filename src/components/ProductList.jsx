import Product from "./Product";
import styles from "./ProductList.module.css";

function ProductList() {
    return (
        <div className={styles.productList}>
            <Product />
            <Product />
            <Product />
        </div>
    )
}

export default ProductList;