import { NavLink, Outlet } from 'react-router-dom'
import styles from './host.module.css'

export default function Host(){
    return (
        <>
            <nav className={styles.nav}>
                <NavLink to="." end className={({ isActive }) => isActive ? styles.active : null}>Reviews</NavLink>
                <NavLink to="income" className={({ isActive }) => isActive ? styles.active : null}>Income</NavLink>
                <NavLink to="vans" className={({ isActive }) => isActive ? styles.active : null}>Vans</NavLink>
                
            </nav>
            <div className={styles.content}>
                <Outlet />
            </div>
        </>
    )
}