import { TicketCheckoutForm } from 'components/forms/TicketCheckoutForm'
import styles from './TicketPaymentCard.module.css'

export function TicketPaymentCard() {
    return (
        <div>
            <h3>$ 39 / ticket</h3>
            <TicketCheckoutForm />
        </div>
    )
}