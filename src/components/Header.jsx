import styles from './Header.module.css';
import Navbar from './Navbar';

export default function Header() {

    return (
        <header className={styles.header}>
            <div className={styles.headerGroup}>
                <Navbar />
            </div>
            <div className={`${styles.headerGroup} ${styles.headerTitle}`}>
                <p className={styles.title}>Lumina</p>
            </div>
            <div className={styles.headerGroup}>
                <div className={styles.buttonWrapper}>
                    <button className={styles.cart}>
                        <svg className={styles.cartIcon} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                            {/* Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                            <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg>
                    </button>
                </div>
            </div>
        </header>
    )
}