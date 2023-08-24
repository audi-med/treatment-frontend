import React from "react";
import styles from "./styles.module.css";

const Home = () => {
    return(
        <main className={styles.container}>
            <div className={styles.gridContainer}>
                <div className={styles.grid}>
                    <div className={styles.card}>

                    </div>
                    <div className={styles.card}>

                    </div>
                </div>
            </div>
            <div className={styles.buttonArea}>
                <button className={styles.primaryButton}>
                    Cadastrar paciente
                </button>
            </div>
        </main>
    )
}

export default Home