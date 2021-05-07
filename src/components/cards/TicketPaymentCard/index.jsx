import { TicketCheckoutForm } from 'components/forms/TicketCheckoutForm'
import styles from './TicketPaymentCard.module.css'

export function TicketPaymentCard() {
    return (
        <div className={styles.TicketPaymentCard}>
            <h3 className={styles.TicketPaymentPrice}>$ 39</h3>
            <TicketCheckoutForm />
        </div>
    )
}