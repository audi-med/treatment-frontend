import { React } from "react";
import styles from "./styles.module.css";

const NavBar = () => {
    return (
        <ul className={styles.navBar}>
            <li className={styles.navBarItem}>
                <a className={styles.navBarLink} href="/doctors"><p className={styles.paragraph}>Médicos</p></a>
            </li>
            <li className={styles.navBarItem}>
                <a className={styles.navBarLink} href="/receptionists"><p className={styles.paragraph}>Recepcionistas</p></a>
            </li>
        </ul>
    )
}

export default NavBar