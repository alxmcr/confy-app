import { useEffect, useState } from 'react';
import styles from './TicketCheckoutForm.module.css'

export function TicketCheckoutForm() {
    // useState
    const [fullname, setFullname] = useState("");
    const [creditCardNumber, setCreditCardNumber] = useState("");
    const [cvvNumber, setCvvNumber] = useState("");
    const [expirationDate, setExpirationDate] = useState("");
    const [isDisabledSubmit, setIsDisabledSubmit] = useState(true);

    // Input Handlers
    const handleChangeFullname = (e) => setFullname(e.target.value)
    const handleChangeCreditCardNumber = (e) => setCreditCardNumber(e.target.value)
    const handleChangeCVVNumber = (e) => setCvvNumber(e.target.value)
    const handleChangeExpirationDate = (e) => setExpirationDate(e.target.value)

    // Button Handlers
    const handleSubmit = (e) => {
        e.preventDefault()
        alert("Payment processed. Thanks! See you soon :) ")
    }

    // useEffect
    useEffect(() => {
        const allFieldsCompleted = fullname.length > 0 &&
            creditCardNumber.length > 0 &&
            cvvNumber.length > 0 &&
            expirationDate.length > 0;

        if (allFieldsCompleted) {
            setIsDisabledSubmit(false)
        } else {
            setIsDisabledSubmit(true)
        }

    }, [fullname, creditCardNumber, cvvNumber, expirationDate])

    return <form className={styles.TicketCheckoutForm}>
        <div className={styles.TicketCheckoutInputGroup}>
            <label className="checkout__label"
                htmlFor="fullname">Cardholder name:</label>
            <input className="checkout__input" type="text"
                id="fullname" name="fullname" value={fullname}
                onChange={handleChangeFullname} />
        </div>
        <div className={styles.TicketCheckoutInputGroup}>
            <label className="checkout__label"
                htmlFor="creditCardNumber">Credit card Number:</label>
            <input className="checkout__input"
                type="text"
                id="creditCardNumber"
                name="creditCardNumber"
                value={creditCardNumber}
                onChange={handleChangeCreditCardNumber} />
            <label className="checkout__label"
                htmlFor="cvvNumber">CVV Number:</label>
            <input className="checkout__input"
                type="text"
                id="cvvNumber"
                name="cvvNumber"
                value={cvvNumber}
                onChange={handleChangeCVVNumber} />
        </div>
        <div className={styles.TicketCheckoutInputGroup}>
            <label className="checkout__label"
                htmlFor="expirationDate">Expiration Date:</label>
            <input className="checkout__input"
                type="date"
                id="date" name="expirationDate"
                value={expirationDate}
                onChange={handleChangeExpirationDate} />
        </div>
        <div className={styles.TicketCheckoutFormActions}>
            <button disabled={isDisabledSubmit}
                className="checkout__button checkout__button--checkout" type="submit"
                onClick={handleSubmit}>Make a payment</button>
        </div>
    </form>
}