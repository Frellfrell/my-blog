import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" end className={({ isActive }) => isActive ? styles.active : undefined}>
        HOME 
      </NavLink>
      <NavLink to="/posts" className={({ isActive }) => isActive ? styles.active : undefined}>
        POSTS
      </NavLink>
    </nav>
  );
}
