import { faHistory, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from '../styles/navbar.module.scss'

const Navbar = () => {
    return (
        <header className={styles.header}>

            { 
                // logo 
            }

            {
                // searchbar = trouver les quizz
            }

            <a> 
                <FontAwesomeIcon icon={faHome} />
                Accueil
            </a>

            <a> 
                <FontAwesomeIcon icon={faHistory} />
                Activité
            </a>

        </header>
    )
}

export default Navbar