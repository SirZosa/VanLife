import { Link, Outlet, useParams, useSearchParams, NavLink} from "react-router-dom"
import { useState, useEffect } from "react"
import styles from './hostVanDetails.module.css'


export default function HostVanDetails(){
    const params = useParams()
    const [van, setVan] = useState(null)

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
        .then(respose => respose.json())
        .then(data => setVan(data.vans))
    }, [])

    return(
        <>
        <Link to='..' relative="path" className={styles.back}>Back to Vans</Link>
        {van ? (
        <div className={styles.card}>
            <div className={styles.vandisplay}>
                <img src={van.imageUrl} alt="van image" />
                <div>
                    <p className={van.type === "simple" ? styles.simple : van.type === "rugged" ? styles.rugged : styles.luxury}>{van.type}</p>
                    <h2>{van.name}</h2>
                    <h3>${van.price}/day</h3>
                </div>
            </div>
            <nav className={styles.nav}>
                <NavLink to='.' end className={({ isActive }) => isActive ? styles.active : null}>Details</NavLink>
                <NavLink to='pricing' className={({ isActive }) => isActive ? styles.active : null}>Pricing</NavLink>
                <NavLink to='photos' className={({ isActive }) => isActive ? styles.active : null}>photos</NavLink>
            </nav>
            <Outlet context={van}/>
        </div>) : <h1>Loading...</h1>}
        
        </>
    )
}