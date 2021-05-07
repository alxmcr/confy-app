import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './FooterApp.module.css'

export function FooterApp() {
    return (
        <footer className={styles.FooterApp}>
            <p className={styles.FooterAppText}>
                <a href="https://github.com/alxmcr/confy-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.FooterAppLink}>
                    <FontAwesomeIcon icon={faGithub} /></a>
                <span> | Made with <FontAwesomeIcon icon={faHeart} /> in Latam</span>
            </p>

        </footer>
    )
}