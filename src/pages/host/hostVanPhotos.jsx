import { useOutletContext } from "react-router-dom"
import styles from './hostVanPhotos.module.css'

export default function HostVanPhotos(){
    const van = useOutletContext()

    return(
        <div>
            <img src={van.imageUrl} className={styles.image}></img>
        </div>
    )
}