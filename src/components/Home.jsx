import styles from './Home.module.css'

function Home() {
    return (
        <main>
            <div className={styles.splashImage}>
                <div className={styles.splashText}>
                    <p className={styles.titleSup}>The New</p>
                    <h1 className={styles.title}>Everyday<br />Essentials</h1>
                    <p className={styles.titleSup}>Collection</p>
                    <button className={styles.splashButton}>Shop</button>
                </div>
            </div>
        </main>
    )
}

export default Home;