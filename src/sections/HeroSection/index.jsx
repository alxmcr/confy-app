import styles from './HeroSection.module.css'

export function HeroSection() {
    return (
        <section id="hero" className={styles.HeroSection}>
            <div className={styles.heroSectionBody}>
                <h1 className={styles.heroSectionTitle}>Confy</h1>
                <p className={styles.heroSectionDescription}>Online Tech Conference <span className={styles.heroSectionDate}>October 4th.</span></p>
                <p className={styles.heroSectionLocation}>París, France</p>
            </div>
            <div className={styles.HeroSectionActions}>
                <a href="#tickets"
                    className={styles.HeroSectionLinkCTA}
                >Tickets</a>
            </div>
        </section>
    )
}