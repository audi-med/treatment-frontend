import { React, useState } from "react";
import styles from "./styles.module.css";
import { Icon } from '@iconify/react';
import InputMask from 'react-input-mask';

const RegisterDoctor = ({ onClose }) => {
    const [nome, setNome] = useState("")
    const [cpf, setCPF] = useState("")
    const [crm, setCRM] = useState("")
    const [numeroDeTelefone, setNumeroDeTelefone] = useState("")
    const [endereco, setEndereco] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const handleRegister = async () => {
        const medico = {
            nome,
            cpf,
            crm,
            numeroDeTelefone,
            endereco,
            email,
            senha
        }

        try {
            const response = await fetch("http://localhost:8080/api/v1/medicos/cadastro", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(medico)
            })
            if (!response.ok) {
                throw new Error("Erro ao cadastrar o médico.")
            }
            onClose()
        } catch (error) {
            setErrorMessage("Erro ao cadastrar o médico. Verifique os dados informados.")
        }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    return (
        <div className={styles.container}>
            <h1 className={styles.primaryTitle}>Cadastrar médico</h1>
            {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
            <form className={styles.form}>
                <div className={styles.inputField}>
                    <label htmlFor="name-input">Nome completo</label>
                    <input id="name-input" className={styles.input} onChange={(e) => setNome(e.target.value)} type="text" required/>
                </div>
                <div className={styles.inputField}>
                    <label htmlFor="cpf-input">CPF</label>
                    <InputMask
                        id="cpf-input"
                        className={styles.input}
                        mask="999.999.999-99"
                        onChange={(e) => setCPF(e.target.value)}
                        type="text"
                        required
                    />
                </div>
                <div className={styles.inputField}>
                    <label htmlFor="crm-input">CRM</label>
                    <input id="crm-input" className={styles.input} onChange={(e) => setCRM(e.target.value)} type="text" required/>
                </div>
                <div className={styles.inputField}>
                    <label htmlFor="phone-number-input">Número de telefone</label>
                    <InputMask
                        id="phone-number-input"
                        className={styles.input}
                        mask="(99) 99999-9999"
                        onChange={(e) => setNumeroDeTelefone(e.target.value)}
                        type="text"
                        required
                    />
                </div>
                <div className={styles.inputField}>
                    <label htmlFor="address-input">Endereço</label>
                    <input id="address-input" className={styles.input} onChange={(e) => setEndereco(e.target.value)} type="text" required/>
                </div>
                <div className={styles.inputField}>
                    <label htmlFor="email-input">E-mail</label>
                    <input id="email-input" className={styles.input} onChange={(e) => setEmail(e.target.value)} type="text" required/>
                    {email && !emailRegex.test(email) && (
                        <span className={styles.errorMessage}><Icon icon="mdi:alert-circle-outline" /> Digite um e-mail válido.</span>
                    )}
                </div>
                <div className={styles.inputField}>
                    <label htmlFor="password-input">Senha</label>
                    <input id="password-input" className={styles.input} onChange={(e) => setSenha(e.target.value)} type="password" required/>
                    {senha && !senhaRegex.test(senha) && (
                        <span className={styles.errorMessage}>A senha deve conter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais.</span>
                    )}
                </div>
                <button className={styles.primaryButton} onClick={handleRegister} type="submit">Cadastrar</button>
            </form>
        </div>
    )
}

export default RegisterDoctor
