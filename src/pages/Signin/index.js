import React from "react";
import styles from "./styles.module.css";

const Signin = () => {
    return (
        <div className={styles.container}>
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
                            <a href="">Esqueceu a senha?</a>
                        </div>
                        <button className={styles.primaryButton} type="submit">Entrar</button>
                    </form>
                </div>
                <div className={styles.bottom}>
                    <p>Não tem uma conta? <a href="/signup">Cadastre-se</a></p>
                </div>
            </div>
        </div>
    )
}

export default Signin