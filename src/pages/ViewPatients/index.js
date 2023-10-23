import { React, useState, useEffect } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import RegisterPatient from "../../components/RegisterPatient";
import EditPatient from "../../components/EditPatient";
import DeletePatient from "../../components/DeletePatient";

const ViewPatients = () => {
    const patients = [
        {
            id: '1',
            nome: 'João',
            cpf: '111.111.111-11',
            birthDate: '',
            email: '',
            password: '',
            address: ''
        },
        {
            id: '2',
            nome: 'Maria',
            cpf: '222.222.222-22',
            birthDate: '',
            email: '',
            password: '',
            address: ''
        }
    ]
    /*const [patients, setPatients] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        const consult = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/v1/pacientes")
                if (!response.ok) {
                    throw new Error()
                }
                const data = await response.json()
                console.log(JSON.stringify(data))
                setPatients(data)
            } catch (error) {
                setErrorMessage(error.message)
            }
        }
        consult()
    }, [])*/

    const [registerPatient, setRegisterPatient] = useState(false)
    const [editPatient, setEditPatient] = useState(false)
    const [deletePatient, setDeletePatient] = useState(false)

    const showRegisterPatient = () => setRegisterPatient(!registerPatient)
    const showEditPatient = () => setEditPatient(!editPatient)
    const showDeletePatient = () => setDeletePatient(!deletePatient)

    if (patients.length > 0) {
        return (
            <div className={styles.container}>
                <div className={styles.gridContainer}>
                    <div className={styles.card}>
                        <h2 className={styles.secondaryTitle}>#</h2>
                        <h2 className={styles.secondaryTitle}>Nome</h2>
                        <h2 className={styles.secondaryTitle}>Ações</h2>
                    </div>
                    <div className={styles.grid}>
                        {patients.map((patient, i) => (
                            <div className={styles.card}>
                                <p className={styles.paragraph}>{i}</p>
                                <p className={styles.paragraph}>
                                    <Link to={`/patients/${patient.id}`} key={patient.id} className={styles.cardLink}>
                                        {patient.nome}
                                    </Link>
                                </p>
                                <div className={styles.actionsArea}>
                                    <button className={styles.button} onClick={showEditPatient}>
                                        <Icon icon="prime:pencil" />
                                    </button>
                                    <button className={styles.button} onClick={showDeletePatient}>
                                        <Icon icon="ic:outline-delete" />
                                    </button>
                                </div>
                                
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.buttonArea}>
                    <button className={styles.primaryButton} onClick={showRegisterPatient}>
                        Cadastrar paciente
                    </button>
                </div>
                {registerPatient && <RegisterPatient active={setRegisterPatient}/>}
                {editPatient && <EditPatient active={setEditPatient} id={1}/>}
                {deletePatient && <DeletePatient active={setDeletePatient} id={1}/>}
            </div>
        )
    } else {
        return (
            <div className={styles.container}>
                <div className={styles.contentArea}>
                    <p className={styles.paragraph}>Cadastre pacientes para visualiza-los aqui.</p>
                </div>
                <div className={styles.buttonArea}>
                    <button className={styles.primaryButton} onClick={showRegisterPatient}>
                        Cadastrar paciente
                    </button>
                </div>
                {registerPatient && <RegisterPatient active={setRegisterPatient}/>}
            </div>
        )
    }
}

export default ViewPatients
