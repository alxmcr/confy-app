import { HeroSection } from 'sections/HeroSection'
import { ScheduleSection } from 'sections/ScheduleSection'
import { SpeakersSection } from 'sections/SpeakersSection'
import { TicketsSection } from 'sections/TicketsSection'
import styles from './HomePage.module.css'

export function HomePage() {
    return (
        <div className={styles.HomePage}>
            <HeroSection />
            <SpeakersSection />
            <ScheduleSection />
            <TicketsSection />
        </div>
    )
}