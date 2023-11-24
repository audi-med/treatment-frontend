import { React, useState, useEffect } from "react";
import styles from "./styles.module.css";
import InputMask from 'react-input-mask';
import { Icon } from '@iconify/react';

const EditDoctor = ({ id, onClose }) => {
    useEffect(() => {
        const consult = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/v1/medicos/" + id)
                if (!response.ok) {
                    throw new Error()
                }
                const data = await response.json()
                setNome(data.nome || "")
                setCPF(data.cpf || "")
                setCRM(data.crm || "")
                setNumeroDeTelefone(data.numeroDeTelefone || "")
                setEndereco(data.endereco || "")
                setEmail(data.email || "")
                setSenha(data.senha || "")
            } catch (error) {
                setErrorMessage(error.message)
            }
        }
        consult()
    }, [id])

    const [nome, setNome] = useState("")
    const [cpf, setCPF] = useState("")
    const [crm, setCRM] = useState("")
    const [numeroDeTelefone, setNumeroDeTelefone] = useState("")
    const [endereco, setEndereco] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const handleEdit = async () => {
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
            const response = await fetch("http://localhost:8080/api/v1/medicos/atualizar/" + id, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(medico)
            })
            if (!response.ok) {
                throw new Error("Erro ao editar o médico.")
            }
            onClose()
        } catch (error) {
            setErrorMessage("Erro ao editar o médico. Verifique os dados informados.")
        }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    return (
        <div className={styles.container}>
            <div className={styles.topArea}>
                <h1 className={styles.primaryTitle}>Editar médico</h1>
                {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
            </div>
            <form className={styles.form}>
                <div className={styles.inputField}>
                    <label htmlFor="name-input">Nome completo</label>
                    <input id="name-input" className={styles.input} onChange={(e) => setNome(e.target.value)} value={nome} type="text" required />
                </div>
                <div className={styles.inputField}>
                    <label htmlFor="cpf-input">CPF</label>
                    <InputMask
                        id="cpf-input"
                        className={styles.input}
                        mask="999.999.999-99"
                        onChange={(e) => setCPF(e.target.value)}
                        value={cpf}
                        type="text"
                        required
                    />
                </div>
                <div className={styles.inputField}>
                    <label htmlFor="crm-input">CRM</label>
                    <InputMask
                        id="crm-input"
                        className={styles.input}
                        mask="9999999"
                        onChange={(e) => setCRM(e.target.value)}
                        value={crm}
                        type="text"
                        required
                    />
                </div>
                <div className={styles.inputField}>
                    <label htmlFor="phone-number-input">Número de telefone</label>
                    <input id="phone-number-input" className={styles.input} onChange={(e) => setNumeroDeTelefone(e.target.value)} value={numeroDeTelefone} type="text" required />
                </div>
                <div className={styles.inputField}>
                    <label htmlFor="address-input">Endereço</label>
                    <input id="address-input" className={styles.input} onChange={(e) => setEndereco(e.target.value)} value={endereco} type="text" required />
                </div>
                <div className={styles.inputField}>
                    <label htmlFor="email-input">E-mail</label>
                    <input id="email-input" className={styles.input} onChange={(e) => setEmail(e.target.value)} value={email} type="text" required />
                    {email && !emailRegex.test(email) && (
                        <span className={styles.errorMessage}><Icon icon="mdi:alert-circle-outline" /> Digite um e-mail válido.</span>
                    )}
                </div>
                <div className={styles.inputField}>
                    <label htmlFor="password-input">Senha</label>
                    <input id="password-input" className={styles.input} onChange={(e) => setSenha(e.target.value)} value={senha} type="password" required />
                </div>
                {senha && !senhaRegex.test(senha) && (
                    <span className={styles.errorMessage}><Icon icon="mdi:alert-circle-outline" /> A senha deve conter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais.</span>
                )}
                <button className={styles.primaryButton} onClick={handleEdit} type="submit">Salvar</button>
            </form>
        </div>
    )
}

export default EditDoctor
