import React from "react";
import styles from "./styles.module.css";

const Signin = () => {
    return (
        <div className={styles.contentArea}>
            <div className={styles.top}>
                <h1>Entrar</h1>
                <form>
                    <div className={styles.inputField}>
                        <label for="email-input">E-mail</label>
                        <input className={styles.input} type="text" required/>
                    </div>
                    <div className={styles.inputField}>
                        <label for="password-input">Senha</label>
                        <input className={styles.input} type="password" required/>
                    </div>
                    <div className={styles.link}>
                        <a className={styles.link} href="">Esqueceu a senha?</a>
                    </div>
                    <button className={styles.primaryButton} type="submit">Entrar</button>
                </form>
            </div>
            <div className={styles.bottom}>
                <p>Não tem uma conta? <a className={styles.link} href="/signup">Cadastre-se</a></p>
            </div>
        </div>
    )
}

export default Signin