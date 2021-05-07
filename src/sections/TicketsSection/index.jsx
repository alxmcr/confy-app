import { TicketPaymentCard } from 'components/cards/TicketPaymentCard'
import styles from './TicketsSection.module.css'

export function TicketsSection() {
    return (
        <section className={styles.TicketsSection}>
            <h2 className={styles.TicketsSectionTitle}>Your ticket to Confy 2021</h2>
            <TicketPaymentCard />
        </section>
    )
}