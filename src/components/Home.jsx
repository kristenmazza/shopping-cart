import styles from './Home.module.css';
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    return (
        <main>
            <div className={styles.splashImage}>
                <div className={styles.splashText}>
                    <p className={styles.titleSup}>The New</p>
                    <h1 className={styles.title}>Everyday<br />Essentials</h1>
                    <p className={styles.titleSup}>Collection</p>
                    <button className={styles.splashButton} onClick={() => navigate('/shop')}>Shop</button>
                </div>
            </div>
            <div className={styles.productDetails}>
                <div className={styles.productDetailsGroup}>
                    <img className={styles.productDetailsImg} src="/images/fields.png" />
                    <h2 className={styles.productDetailsTitle}>High Sustainability</h2>
                    <p>All our products adhere to the highest sustainability standards, as every item is crafted using at least 80% sustainable fibers or fabrics.</p>
                </div>
                <div className={styles.productDetailsGroup}>
                    <img className={styles.productDetailsImg} src="/images/planet_300x.png" />
                    <h2 className={styles.productDetailsTitle}>Your Purchase Gives Back</h2>
                    <p>We proudly donate 1% of our sales to non-profit organizations that strive to create a positive impact on the world.</p>
                </div>
                <div className={styles.productDetailsGroup}>
                    <img className={styles.productDetailsImg} src="/images/happiness.png" />
                    <h2 className={styles.productDetailsTitle}>Happiness Backed Guarantee</h2>
                    <p>If your Lumina products fail to bring you happiness, we'll take the necessary steps to ensure your satisfaction.</p>
                </div>
            </div>
        </main>
    )
}

export default Home;