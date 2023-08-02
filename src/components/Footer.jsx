import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.createdBy}>
                <p>created by kristenmazza</p>
                <a href="https://github.com/kristenmazza"><img className="icon" alt="github icon" src='/images/github-icon.png' /> </a>
            </div>
        </footer>
    )
}