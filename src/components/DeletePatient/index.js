import { React, useState } from "react";
import styles from "./styles.module.css";
import Modal from "../Modal";

const DeletePatient = ({ id, onClose }) => {
    const Form = () => {
        const [message, setMessage] = useState("")

        const handleDelete = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/v1/pacientes/excluir/" + id, {
                    method: "DELETE"
                })
                if (!response.ok) {
                    throw new Error("Erro ao excluir o paciente.")
                }
                onClose()
            } catch (error) {
                setMessage("Erro ao excluir o paciente. Verifique os dados informados.")
            }
        };

        return (
            <div className={styles.container}>
                <h1 className={styles.primaryTitle}>Excluir paciente</h1>
                {message && <p className={styles.errorMessage}>{message}</p>}
                <div className={styles.textArea}>
                    <p className={styles.paragraph}>Tem certeza de que deseja excluir o paciente?</p>
                    <div className={styles.buttonsArea}>
                        <button className={styles.primaryButton} onClick={handleDelete}>Excluir</button>
                        <button className={styles.primaryButton} onClick={onClose}>Cancelar</button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <Modal onClose={onClose} content={Form}/>
    )
}

export default DeletePatient
