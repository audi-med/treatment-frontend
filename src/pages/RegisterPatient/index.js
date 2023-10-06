import React from "react";
import styles from "./styles.module.css";

const RegisterPatient = () => {
    return (
        <div className={styles.contentArea}>
            <h1>Cadastrar paciente</h1>
            <form className={styles.form}>
                <div className={styles.inputField}>
                    <label htmlFor="name-input">Nome completo</label>
                    <input className={styles.input} type="text" required/>
                </div>
                <div className={styles.inputField}>
                    <label htmlFor="email-input">E-mail</label>
                    <input className={styles.input} type="text" required/>
                </div>
                <div className={styles.inputField}>
                    <label htmlFor="password-input">Senha</label>
                    <input className={styles.input} type="password" required/>
                </div>
                <button className={styles.primaryButton} type="submit">Cadastrar</button>
            </form>
        </div>
    )
}

export default RegisterPatient