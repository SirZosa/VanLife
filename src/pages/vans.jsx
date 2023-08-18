import { useEffect } from "react"
import { useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import styles from './vans.module.css'

export default function Vans(){
    const [searchParams, setSearchParams] = useSearchParams()
    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch("/api/vans")
            .then(responce => responce.json())
            .then(data => setVans(data.vans))
    }, [])

    const filterValue = searchParams.get("type")

    const filteredVans = filterValue ? vans.filter(van => van.type === filterValue) : vans

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
          if (value === null) {
            prevParams.delete(key)
          } else {
            prevParams.set(key, value)
          }
          return prevParams
        })
      }

    const vansElements = filteredVans.map(van => (
        <div key={van.id} className={styles.vansCard}>
            <Link to={`/vans/${van.id}`} state={{ search: `?${searchParams.toString()}` }}>
                <img className={styles.vansImg} src={van.imageUrl} />
                <div className={styles.vansInfo}>
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
                <p className={van.type === "simple" ? styles.simple : van.type === "rugged" ? styles.rugged : styles.luxury}>{van.type}</p>
            </Link>
        </div>
    ))
    return (
        <div className={styles.content}>
            <h1 className={styles.header}>Explore</h1>
            <div className={styles.filters}>
                <div className={styles.filter}>
                <button className={filterValue === 'simple' ? styles.simple : styles.none} onClick={() => handleFilterChange('type', 'simple')}>Simple</button>
                <button className={filterValue === 'rugged' ? styles.rugged : styles.none} onClick={() => handleFilterChange('type', 'rugged')}>Rugged</button>
                <button className={filterValue === 'luxury' ? styles.luxury : styles.none} onClick={() => handleFilterChange('type', 'luxury')}>Luxury</button>
                </div>
                <div className={styles.clear} >
                <button onClick={() => handleFilterChange('type', null)}>Clear filters</button>
                </div>
            </div>
            {vans ? (
            <div className={styles.vansDisplay}>
                {vansElements}
            </div>) : <h1>Loading...</h1>
}
        </div>
    )
}