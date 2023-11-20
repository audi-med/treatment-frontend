import { React, useState, useEffect } from "react";
import styles from "./styles.module.css";
import { useParams } from "react-router-dom";

const Patient = () => {
    const [patient, setPatient] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    const {id} = useParams();
    
    useEffect(() => {
        const consult = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/v1/pacientes/" + id)
                if (!response.ok) {
                    throw new Error()
                }
                const data = await response.json()
                setPatient(data)
            } catch (error) {
                setErrorMessage("Erro ao exibir os dados do paciente.")
            }
        }
        consult()
    }, [id])

    return (
        <div className={styles.container}>
            <div className={styles.contentArea}>
                <h1 className={styles.primaryTitle}>O que deseja fazer?</h1>
                <div className={styles.buttonsArea}>
                    <a className={styles.primaryButton} href="/patient/treatment">Realizar tratamento</a>
                    <a className={styles.primaryButton} href="">Ver resultados</a>
                </div>
            </div>
        </div>
    )
}

export default Patient
