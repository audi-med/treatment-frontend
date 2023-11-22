import React from "react";
import styles from "./styles.module.css";

const Patient = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contentArea}>
                <h1 className={styles.primaryTitle}>O que deseja fazer?</h1>
                <div className={styles.buttonsArea}>
                    <a className={styles.primaryButton} href="/patient/treatment">Realizar tratamento</a>
                    <a className={styles.primaryButton} href="/patient/results">Ver resultados</a>
                </div>
            </div>
        </div>
    )
}

export default Patient
