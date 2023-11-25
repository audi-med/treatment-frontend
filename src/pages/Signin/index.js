import React, { useState } from 'react';
import styles from "./styles.module.css";
import { Icon } from '@iconify/react';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [emailErro, setEmailErro] = useState('');
    const [senhaErro, setSenhaErro] = useState('');
    const [type, setType] = useState(null)

    const validarEmail = () => {
        setEmailErro('');
        if (!email) {
            setEmailErro('O e-mail é obrigatório.');
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            setEmailErro('Digite um e-mail válido.');
        }
    };

    const validarSenha = () => {
        setSenhaErro('');
        if (!senha) {
            setSenhaErro('A senha é obrigatória.');
        } else if (senha.length < 8) {
            setSenhaErro('A senha deve ter pelo menos 8 caracteres.');
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();
        validarEmail();
        validarSenha();
    };

    return (
        <div className={styles.container}>
            <div className={styles.contentArea}>
                <h1 className={styles.primaryTitle}>Entrar</h1>
                <form className={styles.form} onSubmit={handleLogin}>
                    <div className={styles.inputField}>
                        <label className={styles.label} htmlFor="email-input">E-mail</label>
                        <input
                            id="email-input"
                            className={styles.input}
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onBlur={validarEmail}
                            required
                        />
                        {emailErro && <span className={styles.errorMessage}><Icon icon="mdi:alert-circle-outline" /> {emailErro}</span>}
                    </div>
                    <div className={styles.inputField}>
                        <label className={styles.label} htmlFor="password-input">Senha</label>
                        <input
                            id="password-input"
                            className={styles.input}
                            type="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            onBlur={validarSenha}
                            required
                        />
                        {senhaErro && <span className={styles.errorMessage}><Icon icon="mdi:alert-circle-outline" /> {senhaErro}</span>}
                    </div>
                    <div className={styles.inputField}>
                        <label className={styles.label} htmlFor="type-select">Tipo de login</label>
                        <select id="type-select" className={styles.input} value={type} onChange={(e) => setType(e.target.value)} required>
                            <option value={0}>Paciente</option>
                            <option value={1}>Recepcionista</option>
                            <option value={2}>Médico</option>
                            <option value={3}>Dono de hospital</option>
                        </select>
                    </div>
                    <div className={styles.linksArea}>
                        <a className={styles.link} href="">Esqueceu a senha?</a>
                    </div>
                    <button className={styles.primaryButton} type="submit">Entrar</button>
                </form>
            </div>
        </div>
    )
}

export default Signin;