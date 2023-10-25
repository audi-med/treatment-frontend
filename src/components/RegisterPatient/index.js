import { React, useState } from "react";
import styles from "./styles.module.css";
import { Icon } from '@iconify/react';

const RegisterPatient = ({onClose}) => {
    const closeByBackground = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    }

    const closeByButton = () => {
        onClose();
    }

    const [nome, setNome] = useState("");
    const [cpf, setCPF] = useState("");
    const [dataDeNascimento, setDataDeNascimento] = useState("");
    const [numeroDeTelefone, setNumeroDeTelefone] = useState("");
    const [endereco, setEndereco] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nomeDoResponsavel, setNomeDoResponsavel] = useState("");
    const [cpfDoResponsavel, setCPFDoResponsavel] = useState("");
    const [message, setMessage] = useState("");

    const handleRegister = async () => {
        const paciente = {
            nome,
            cpf,
            dataDeNascimento,
            numeroDeTelefone,
            endereco,
            email,
            senha,
            nomeDoResponsavel,
            cpfDoResponsavel
        }

        try {
            const response = await fetch("http://localhost:8080/api/v1/pacientes/cadastro", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(paciente)
            })
            if (!response.ok) {
                throw new Error("Erro ao cadastrar o paciente.")
            }
            setMessage("Paciente cadastrado com sucesso!")
        } catch (error) {
            setMessage("Erro ao cadastrar o paciente. Verifique os dados informados.")
        }

        onClose();
    };


    return (
        <div className={styles.mainContainer}>
            <div className={styles.shadow}></div>
            <div className={styles.mainContentArea}>
                <div className={styles.container} onClick={closeByBackground}>
                    <div className={styles.contentArea}>
                        <div className={styles.topArea}>
                            <button className={styles.button} onClick={closeByButton}>
                                <Icon icon="tabler:x" />
                            </button>
                        </div>
                        <h1 className={styles.primaryTitle}>Cadastrar paciente</h1>
                        {message && <p className={styles.errorMessage}>{message}</p>}
                        <form className={styles.form}>
                            <div className={styles.inputField}>
                                <label htmlFor="name-input">Nome completo</label>
                                <input className={styles.input} onChange={(e) => setNome(e.target.value)} type="text" required/>
                            </div>
                            <div className={styles.inputField}>
                                <label htmlFor="cpf-input">CPF</label>
                                <input className={styles.input} onChange={(e) => setCPF(e.target.value)} type="text" required/>
                            </div>
                            <div className={styles.inputField}>
                                <label htmlFor="birthdate-input">Data de nascimento</label>
                                <input className={styles.input} onChange={(e) => setDataDeNascimento(e.target.value)} type="text" required/>
                            </div>
                            <div className={styles.inputField}>
                                <label htmlFor="phone-number-input">Número de telefone</label>
                                <input className={styles.input} onChange={(e) => setNumeroDeTelefone(e.target.value)} type="text" required/>
                            </div>
                            <div className={styles.inputField}>
                                <label htmlFor="address-input">Endereço</label>
                                <input className={styles.input} onChange={(e) => setEndereco(e.target.value)} type="text" required/>
                            </div>
                            <div className={styles.inputField}>
                                <label htmlFor="email-input">E-mail</label>
                                <input className={styles.input} onChange={(e) => setEmail(e.target.value)} type="text" required/>
                            </div>
                            <div className={styles.inputField}>
                                <label htmlFor="password-input">Senha</label>
                                <input className={styles.input} onChange={(e) => setSenha(e.target.value)} type="password" required/>
                            </div>
                            <div className={styles.inputField}>
                                <label htmlFor="responsible-name-input">Nome do responsável</label>
                                <input className={styles.input} onChange={(e) => setNomeDoResponsavel(e.target.value)} type="text" required/>
                            </div>
                            <div className={styles.inputField}>
                                <label htmlFor="responsible-cpf-input">CPF do responsável</label>
                                <input className={styles.input} onChange={(e) => setCPFDoResponsavel(e.target.value)} type="text" required/>
                            </div>
                            <button className={styles.primaryButton} onClick={handleRegister} type="submit">Cadastrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPatient
