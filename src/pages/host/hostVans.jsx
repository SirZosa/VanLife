import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import styles from "./hostVans.module.css"

export default function HostVans(){
    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch("/api/vans")
            .then(responce => responce.json())
            .then(data => setVans(data.vans))
    }, [])

    const vansDisplay = vans.map(van => {
        return (
            <Link to={`${van.id}`} key={van.id}>
            <div className={styles.card}>
                <img src={van.imageUrl}></img>
                <div className={styles.info}>
                    <h3>{van.name}</h3>
                    <p>{van.price}$ a day</p>
                </div>
            </div>
            </Link>
        )
    })
    return(
        <div className={styles.content}>
        <h2>Your listed Vans</h2>
        {vansDisplay}
        </div>
    )
}