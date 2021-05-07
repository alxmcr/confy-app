import styles from './NavigationApp.module.css'

export function NavigationApp({ showMenu = true }) {
    const navAppStyles = showMenu ? styles.navAppShow : styles.navApp;
    return (
        <nav className={navAppStyles}>
            <ul className={styles.NavigationList}>
                <li className={styles.NavigationItem}>
                    <a href="#speakers" className={styles.NavigationLink}>Speakers</a>
                </li>
                <li>
                    <a href="#schedule" className={styles.NavigationLink}>Schedule</a>
                </li>
                <li>
                    <a href="#tickets" className={styles.NavigationLinkCTA}>Tickets</a>
                </li>
            </ul>
        </nav>
    )
}