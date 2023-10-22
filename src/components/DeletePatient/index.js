import { React, useState } from "react";
import styles from "./styles.module.css";
import { Icon } from '@iconify/react';

const DeletePatient = ({active, id}) => {
    const closeByBackground = (e) => {
        if (e.target === e.currentTarget) {
            active(false)
        }
    }

    const closeByButton = () => {
        active(false)
    }

    const [message, setMessage] = useState("");

    const deletePatient = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/v1/pacientes/excluir" + id, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if (!response.ok) {
                throw new Error("Erro ao cadastrar o paciente.")
            }
            setMessage("Paciente cadastrado com sucesso!")
        } catch (error) {
            setMessage("Erro ao cadastrar o paciente. Verifique os dados informados.")
        }
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.shadow}></div>
            <div className={styles.container} onClick={closeByBackground}>
                <div className={styles.contentArea}>
                    <div className={styles.topArea}>
                        <button className={styles.button} onClick={closeByButton}>
                            <Icon icon="tabler:x" />
                        </button>
                    </div>
                    <h1 className={styles.primaryTitle}>Excluir paciente</h1>
                    {message && <p className={styles.errorMessage}>{message}</p>}
                    <p>Tem certeza de que deseja excluir o paciente?</p>
                    <div className={styles.buttonsArea}>
                        <button className={styles.primaryButton} onClick={deletePatient}>Excluir</button>
                        <button className={styles.primaryButton} onClick={closeByButton}>Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeletePatient
