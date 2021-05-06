import { HeroSection } from 'sections/HeroSection'
import styles from './HomePage.module.css'

export function HomePage() {
    return (
        <div className={styles.HomePage}>
            <HeroSection />
        </div>
    )
}