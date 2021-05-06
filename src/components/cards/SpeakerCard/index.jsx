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
            <ul className={styles.speakerCardDetails}>
                <li className={styles.speakerCardNameInfo}>
                    <span className="speaker__text speaker__text--bold">{firstname} {lastname}</span>
                </li>
                <li className={styles.speakerCardSocialInfo}>
                    <span className="speaker__text">
                        <a className="speaker__link" href={`https://twitter.com/${twitter}`}>{`@${twitter}`}</a>
                    </span>
                </li>
                <li className={styles.speakerCardWebsiteInfo}>
                    <span className="speaker__text">
                        <a className="speaker__link speaker__link--globe" href={websiteURL}>
                            <FontAwesomeIcon icon={faGlobeAmericas} />
                        </a>
                    </span>
                </li>
            </ul>
        </div>
    )
}