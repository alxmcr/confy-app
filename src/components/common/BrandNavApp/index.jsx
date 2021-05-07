import { faBars, faCode, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import styles from './BrandNavApp.module.css'

export function BrandNavApp({ showMenu, setShowMenu }) {
    const handlerShowMenu = () => setShowMenu(true)
    const handlerHiddenMenu = () => setShowMenu(false)

    return (
        <div className={styles.BrandNavApp}>
            <NavLink to="/"
                className={styles.BrandNavAppLink}>
                <i className="header__logo">
                    <FontAwesomeIcon icon={faCode} />
                </i>
                <span className="header__name">Confy</span>
            </NavLink>

            {!showMenu
                ? <button
                    className={styles.brandNavButton}
                    onClick={handlerShowMenu}
                    aria-label="Hamburger button - Open Menu"
                >
                    <i className={styles.brandNavButtonIcon}>
                        <FontAwesomeIcon icon={faBars} />
                    </i>
                </button>
                : <button
                    className={styles.brandNavButton}
                    onClick={handlerHiddenMenu}
                    aria-label="X button - Close Menu"
                >
                    <i className={styles.brandNavButtonIcon}>
                        <FontAwesomeIcon icon={faTimes} />
                    </i>
                </button>
            }
        </div>
    )
}