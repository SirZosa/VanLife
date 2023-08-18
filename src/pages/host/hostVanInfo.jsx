import { useOutletContext } from 'react-router-dom'
import styles from './hostVanInfo.module.css'

export default function HostVanInfo(){
    const currentVan = useOutletContext()
    return(
        <div className={styles.info}>
            <p><span>Name:</span> {currentVan.name}</p>
            <p><span>Category:</span> {currentVan.type}</p>
            <p><span>Description:</span> {currentVan.description}</p>
        </div>
    )
}