import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import patients from "../../util";

const Home = () => {
    if (patients.length  > 0) {
        return (
            <div className={styles.container}>
                <div className={styles.gridContainer}>
                    <div className={styles.grid}>
                        {patients.map((patient) => (
                            <Link to={`/patient/${patient.slug}`} key={patient.slug} className={styles.cardLink}>
                                <div className={styles.card}>
                                    {patient.name}         
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className={styles.buttonArea}>
                    <a className={styles.primaryButton} href="/register-patient">
                        Cadastrar paciente
                    </a>
                </div>
            </div>
        )
    } else {
        return (
            <div className={styles.container}>
                <div className={styles.contentArea}>
                    <p>Cadastre pacientes para visualiza-los aqui.</p>
                </div>
                <div className={styles.buttonArea}>
                    <a className={styles.primaryButton} href="/register-patient">
                        Cadastrar paciente
                    </a>
                </div>
            </div>
        )
    }
}

export default Home