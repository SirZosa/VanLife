import { Link } from "react-router-dom"
import styles from './home.module.css'

export default function Home(){
    return(
        <div className={styles.home}>
            <h1>We got the Vans for your plans!</h1>
            <p>Go around the world with the best choice of vans at Vanlife. Rent our vans and make your perfect road trip</p>
            <Link to="vans" className={styles.link}>Find your van</Link>
        </div>
    )
}