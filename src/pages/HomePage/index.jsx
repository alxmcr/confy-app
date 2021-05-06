import { HeroSection } from 'sections/HeroSection'
import { SpeakersSection } from 'sections/SpeakersSection'
import styles from './HomePage.module.css'

export function HomePage() {
    return (
        <div className={styles.HomePage}>
            <HeroSection />
            <SpeakersSection />
        </div>
    )
}