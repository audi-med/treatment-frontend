import { React, useState, useEffect } from "react";
import styles from "./styles.module.css";
import { Icon } from '@iconify/react';

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


    useEffect(() => {
        // Selecionar os elementos após a renderização do componente
        const form = document.querySelector("form");
        const emailField = form.querySelector(".email-field");
        const emailInput = emailField.querySelector(".input");
        const passField = form.querySelector(".create-password");
        const passInput = passField.querySelector(".input");

        // Validação email
        function checkEmail() {
            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            const isValid = emailInput.value.match(emailPattern);

            if (!isValid) {
                emailField.classList.add("invalid");
                emailField.querySelector(".error").style.display = "flex";
            } else {
                emailField.classList.remove("invalid");
                emailField.querySelector(".error").style.display = "none";
            }
        }

        // Validação senha
        function createPass() {
            const passPattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
            const isValid = passInput.value.match(passPattern);

            if (!isValid) {
                passField.classList.add("invalid");
                passField.querySelector(".error").style.display = "flex";
            } else {
                passField.classList.remove("invalid");
                passField.querySelector(".error").style.display = "none";
            }
        }
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            checkEmail();
            createPass();

            // Remova a lógica de redirecionamento, pois pode ser tratada de forma diferente em um aplicativo React
            // Handle redirect logic here, e.g., using React Router or other navigation methods

            // Não use window.location.href diretamente, pois pode causar recarregamento da página inteira
            // Em vez disso, manipule a navegação no seu aplicativo React conforme necessário
        });
    }, []);




    return (
        <div className={styles.container}>
            <h1 className={styles.primaryTitle}>Cadastrar paciente</h1>
            {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
            <form action="#" className={styles.form}>
                <div className={styles.inputField}>
                    <label htmlFor="name-input">Nome completo</label>
                    <input id="name-input" className={styles.input} onChange={(e) => setNome(e.target.value)} type="text" required />
                </div>
                <div className={styles.inputField}>
                    <label htmlFor="cpf-input">CPF</label>
                    <input id="cpf-input" className={styles.input} onChange={(e) => setCPF(e.target.value)} type="text" required />
                </div>
                <div className={styles.inputField}>
                    <label htmlFor="birthdate-input">Data de nascimento</label>
                    <input id="birthdate-input" className={styles.input} onChange={(e) => setDataDeNascimento(e.target.value)} type="text" required />
                </div>
                <div className={styles.inputField}>
                    <label htmlFor="phone-number-input">Número de telefone</label>
                    <input id="phone-number-input" className={styles.input} onChange={(e) => setNumeroDeTelefone(e.target.value)} type="text" required />
                </div>
                <div className={styles.inputField}>
                    <label htmlFor="address-input">Endereço</label>
                    <input id="address-input" className={styles.input} onChange={(e) => setEndereco(e.target.value)} type="text" required />
                </div>
                <div className="field email-field">
                    <div className={styles.inputField}>
                        <label htmlFor="email-input">E-mail</label>
                        <input id="email-input" className={styles.input} onChange={(e) => setEmail(e.target.value)} type="text" required />
                    </div>
                    <span className="error email-error">
                        <Icon icon="zondicons:exclamation-outline" />
                        <p className="error-text">Por favor digite um e-mail válido</p>
                    </span>
                </div>
                <div className="field create-password">
                    <div className={styles.inputField}>
                        <label htmlFor="password-input">Senha</label>
                        <input id="password-input" className={styles.input} onChange={(e) => setSenha(e.target.value)} type="password" required />
                    </div>
                    <span className="error password-error">
                        <Icon className="error-icon" icon="zondicons:exclamation-outline" />
                        <p className="error-text">Por favor digite uma senha com pelo menos 8 caracteres com número, símbolo, letra minúsculo e maiúscula.</p>
                    </span>
                </div>
                <div className={styles.inputField}>
                    <label htmlFor="responsible-name-input">Nome do responsável</label>
                    <input id="responsible-name-input" className={styles.input} onChange={(e) => setNomeDoResponsavel(e.target.value)} type="text" required />
                </div>
                <div className={styles.inputField}>
                    <label htmlFor="responsible-cpf-input">CPF do responsável</label>
                    <input id="responsible-cpf-input" className={styles.input} onChange={(e) => setCPFDoResponsavel(e.target.value)} type="text" required />
                </div>
                <button className={styles.primaryButton} onClick={handleRegister} type="submit">Cadastrar</button>
            </form>
        </div>
    )
}

export default RegisterPatient
