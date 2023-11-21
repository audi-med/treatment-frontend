import { React, useState, useEffect } from "react";
import styles from "./styles.module.css";
import { Icon } from '@iconify/react';
import InputMask from 'react-input-mask';


const RegisterPatient = ({ onClose }) => {
    const [nome, setNome] = useState("")
    const [cpf, setCPF] = useState("")
    const [dataDeNascimento, setDataDeNascimento] = useState("")
    const [numeroDeTelefone, setNumeroDeTelefone] = useState("")
    const [endereco, setEndereco] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [nomeDoResponsavel, setNomeDoResponsavel] = useState("")
    const [cpfDoResponsavel, setCPFDoResponsavel] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

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
            onClose()
        } catch (error) {
            setErrorMessage("Erro ao cadastrar o paciente. Verifique os dados informados.")
        }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;




    return (
        <div className={styles.container}>
            <div className={styles.topArea}>
                <h1 className={styles.primaryTitle}>Cadastrar paciente</h1>
                {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
            </div>
            <form action="#" className={styles.form}>
                <div className={styles.inputField}>
                    <label htmlFor="name-input">Nome completo</label>
                    <input id="name-input" className={styles.input} onChange={(e) => setNome(e.target.value)} type="text" required />
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
                    <label htmlFor="birthdate-input">Data de nascimento</label>
                    <InputMask
                        id="birthdate-input"
                        className={styles.input}
                        mask="99/99/9999"
                        onChange={(e) => setDataDeNascimento(e.target.value)}
                        type="text"
                        required
                    />
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
                    <input id="address-input" className={styles.input} onChange={(e) => setEndereco(e.target.value)} type="text" required />
                </div>

                <div className={styles.inputField}>
                    <label htmlFor="email-input">E-mail</label>
                    <input id="email-input" className={styles.input} onChange={(e) => setEmail(e.target.value)} type="text" required />
                    {email && !emailRegex.test(email) && (
                        <span className={styles.errorMessage}><Icon icon="mdi:alert-circle-outline" /> Digite um e-mail válido.</span>
                    )}
                </div>



                <div className={styles.inputField}>
                    <label htmlFor="password-input">Senha</label>
                    <input id="password-input" className={styles.input} onChange={(e) => setSenha(e.target.value)} type="password" required />
                    {senha && !senhaRegex.test(senha) && (
                        <span className={styles.errorMessage}>
                            A senha deve conter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais.
                        </span>
                    )}
                </div>


                <div className={styles.inputField}>
                    <label htmlFor="responsible-name-input">Nome do responsável</label>
                    <input id="responsible-name-input" className={styles.input} onChange={(e) => setNomeDoResponsavel(e.target.value)} type="text" required />
                </div>
                <div className={styles.inputField}>
                    <label htmlFor="responsible-cpf-input">CPF do responsável</label>
                    <InputMask
                        id="responsible-cpf-input"
                        className={styles.input}
                        mask="999.999.999-99"
                        onChange={(e) => setCPFDoResponsavel(e.target.value)}
                        type="text"
                        required
                    />
                </div>
                <button className={styles.primaryButton} onClick={handleRegister} type="submit">Cadastrar</button>
            </form>
        </div>
    )
}

export default RegisterPatient
