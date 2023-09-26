import React from "react";
import styles from "./styles.module.css";

const Signup = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contentArea}>
                <div className={styles.top}>
                    <h1>Cadastrar-se</h1>
                    <form>
                        <div className={styles.inputField}>
                            <label for="name-input">Nome de usuário</label>
                            <input className={styles.input} type="text" required/>
                        </div>
                        <div className={styles.inputField}>
                            <label for="email-input">E-mail</label>
                            <input className={styles.input} type="text" required/>
                        </div>
                        <div className={styles.inputField}>
                            <label for="password-input">Senha</label>
                            <input className={styles.input} type="password" required/>
                        </div>
                        <p>Ao se cadastrar, você concorda com nossos <a href="">Termos de uso</a> e nossa <a href="">Política de privacidade</a>, incluindo o <a href="">Uso de Cookies</a>.</p>
                        <button className={styles.primaryButton} type="submit">Cadastrar-se</button>
                    </form>
                </div>
                <div className={styles.bottom}>
                    <p>Já tem uma conta? <a href="/signin">Entre</a></p>
                </div>
            </div>
        </div>
    )
}

export default Signup