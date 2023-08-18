import { useOutletContext } from "react-router-dom"
import styles from './hostVanPricing.module.css'

export default function HostVanPricing(){
    const van = useOutletContext()
    return(
        <div className={styles.price}>
        <p><span>${van.price}</span>/day</p>
        </div>
    )
}