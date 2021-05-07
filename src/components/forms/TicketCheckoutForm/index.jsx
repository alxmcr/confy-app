import { useEffect, useState } from 'react';
import styles from './TicketCheckoutForm.module.css'

export function TicketCheckoutForm() {
    // useState
    const [fullname, setFullname] = useState("");
    const [creditCardNumber, setCreditCardNumber] = useState("");
    const [cvvNumber, setCvvNumber] = useState("");
    const [expirationDate, setExpirationDate] = useState("");
    const [isDisabledSubmit, setIsDisabledSubmit] = useState(true);
    const [submitted, setSubmitted] = useState(false);

    // Input Handlers
    const handleChangeFullname = (e) => setFullname(e.target.value)
    const handleChangeCreditCardNumber = (e) => setCreditCardNumber(e.target.value)
    const handleChangeCVVNumber = (e) => setCvvNumber(e.target.value)
    const handleChangeExpirationDate = (e) => setExpirationDate(e.target.value)

    // Button Handlers
    const handlerSendForm = (e) => {
        e.preventDefault();
        setSubmitted(true);
        resetForm();
    }
    const resetForm = () => {
        setFullname("");
        setCreditCardNumber("");
        setCvvNumber("");
        setExpirationDate("");
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

    if (submitted) return (
        <p className={styles.TicketCheckoutInfoMessage}>Payment processed. <br /> Thanks! See you soon :)</p>
    )

    return <form className={styles.TicketCheckoutForm}
        onSubmit={handlerSendForm} onReset={resetForm}>
        <div className={styles.TicketCheckoutInputGroup}>
            <label className={styles.TicketCheckoutLabel}
                htmlFor="fullname">Cardholder name:</label>
            <input className={styles.TicketCheckoutInput}
                type="text"
                id="fullname"
                name="fullname"
                value={fullname}
                onChange={handleChangeFullname}
                placeholder="Write your fullname here"
            />
        </div>
        <div className={styles.TicketCheckoutInputGroup}>
            <label className={styles.TicketCheckoutLabel}
                htmlFor="creditCardNumber">Credit card Number:</label>
            <input className={styles.TicketCheckoutInput}
                type="text"
                id="creditCardNumber"
                name="creditCardNumber"
                value={creditCardNumber}
                onChange={handleChangeCreditCardNumber}
                placeholder="Write your credit card number here"
            />
            <label className={styles.TicketCheckoutLabel}
                htmlFor="cvvNumber">CVV Number:</label>
            <input className={styles.TicketCheckoutInput}
                type="text"
                id="cvvNumber"
                name="cvvNumber"
                value={cvvNumber}
                onChange={handleChangeCVVNumber}
                placeholder="Write your CVV number here"
            />
        </div>
        <div className={styles.TicketCheckoutInputGroup}>
            <label className={styles.TicketCheckoutLabel}
                htmlFor="expirationDate">Expiration Date:</label>
            <input className={styles.TicketCheckoutInput}
                type="date"
                id="date" name="expirationDate"
                value={expirationDate}
                onChange={handleChangeExpirationDate}
                placeholder="Write your experation date here"
            />
        </div>
        <div className={styles.TicketCheckoutFormActions}>
            <button disabled={isDisabledSubmit}
                className={styles.TicketCheckoutButton}
                type="submit">Make a payment</button>
        </div>
    </form>
}