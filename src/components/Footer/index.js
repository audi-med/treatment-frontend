import { React, useState } from "react";
import styles from "./styles.module.css";

const Footer = () => {
    return (
        <footer className={styles.container}>
            <p className={styles.paragraph}>&copy; 2023 AudiTech</p>
        </footer>
    )
}

export default Footer