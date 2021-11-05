import Link from 'next/link'

import { faHistory, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from '../styles/navbar.module.scss'

const Navbar = () => {
    return (
        <header className={styles.header}>

            <div>
    
                { 
                    // logo 
                }

                {
                    // searchbar = trouver les quizz
                }

                <Link href="/"> 
                    <FontAwesomeIcon icon={faHome} />
                    Accueil
                </Link>

                <a> 
                    <FontAwesomeIcon icon={faHistory} />
                    Activité
                </a>

            </div>

            <div>
                <a>
                    <FontAwesomeIcon icon={faUser} />
                    Se connecter
                </a>
            </div>

        </header>
    )
}

export default Navbar