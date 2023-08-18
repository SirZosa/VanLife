import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import styles from './vanDetails.module.css'
export default function VanDetails(){

    const params = useParams()
    const [van, setVan] = React.useState(null)
    const location = useLocation()

    const search = location.state?.search || ""

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(responce => responce.json())
            .then(data => setVan(data.vans))
    },[params.id])

    
    return(
        <div>
            <div className={styles.back}>
                <Link to={`..${search}`} relative="path">Back to Vans</Link>
            </div>
            {van ? (
                <div className={styles.vandetails}>
                    <img src={van.imageUrl} alt="van Image" />
                    <div className={styles.info}>
                        <p className={van.type === "simple" ? styles.simple : van.type === "rugged" ? styles.rugged : styles.luxury}>{van.type}</p>
                        <h2>{van.name}</h2>
                        <h3>{van.price}$ a day.</h3>
                        <p>{van.description}</p>
                        <Link className={styles.btn}>Rent this Van</Link>
                    </div>
                </div>
            ) : <h1>Loading...</h1>
}
        </div>
    )
}