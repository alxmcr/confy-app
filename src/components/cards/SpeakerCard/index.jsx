import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './SpeakerCard.module.css'

export function SpeakerCard({ speaker }) {
    const { name, login, picture } = speaker

    const firstname = name.first;
    const lastname = name.last;
    const id = login.uuid;
    const twitter = login.username
    const websiteURL = `https://${login.username}.com/`;
    const photo = picture.medium

    return (
        <div className={styles.SpeakerCard} id={id}>
            <img className={styles.speakerCardImage} src={photo} alt={name} />
            <ul className={styles.speakerCardList}>
                <li className={styles.speakerCardItem}>
                    <span className={styles.speakerCardFullName}>{firstname} {lastname}</span>
                </li>
                <li className={styles.speakerCardItem}>
                    <a className={styles.speakerCardLinkTwitter} href={`https://twitter.com/${twitter}`}>{`@${twitter}`}</a>
                </li>
                <li className={styles.speakerCardItem}>
                    <a className={styles.speakerCardLinkWebsite} href={websiteURL}>
                        <FontAwesomeIcon icon={faGlobeAmericas} />
                    </a>
                </li>
            </ul>
        </div>
    )
}