import { TalksList } from 'components/lists/TalksList'
import styles from './ScheduleSection.module.css'

export function ScheduleSection() {
    return (
        <section className={styles.ScheduleSection}>
            <h2 className={styles.ScheduleSectionTitle}>Schedule</h2>
            <TalksList />
        </section>
    )
}