import { SpeakersGrid } from 'components/grids/SpeakersGrid'
import styles from './SpeakersSection.module.css'

export function SpeakersSection() {
    return (
        <section className={styles.SpeakersSection}>
            <h2 className={styles.speakersSectionTitle}>Speakers</h2>
            <SpeakersGrid />
        </section>
    )
}