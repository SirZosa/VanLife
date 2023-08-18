import { Link } from 'react-router-dom'
import styles from './navbar.module.css'

export default function Nav(){
    return (
        <header className={styles.flex}>
            <Link to="/" className={styles.logo}>#VAN</Link>
            <nav className={styles.links}>
                <Link to="about">About</Link>
                <Link to="vans">Vans</Link>
                <Link to="host">Host</Link>
            </nav>
        </header>
    )
}