import { React, useState, useEffect } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import RegisterPatient from "../../components/RegisterPatient";
import EditPatient from "../../components/EditPatient";
import DeletePatient from "../../components/DeletePatient";

const ViewPatients = () => {
    /*const patients = [
        {
            id: '1',
            nome: 'João',
        },
        {
            id: '2',
            nome: 'Maria',
        }
    ]*/

    const [patients, setPatients] = useState([]);
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
    }, [])

    const [registerPatient, setRegisterPatient] = useState(false)
    const [editPatient, setEditPatient] = useState(false)
    const [deletePatient, setDeletePatient] = useState(false)

    const showRegisterPatient = () => setRegisterPatient(!registerPatient)
    const showEditPatient = () => setEditPatient(!editPatient)
    const showDeletePatient = () => setDeletePatient(!deletePatient)

    return (
        <div className={styles.container}>
            <div className={styles.contentArea}>
                <h1 className={styles.primaryTitle}>Pacientes</h1>
                <div className={styles.optionsArea}>
                    <div className={styles.searchArea}>
                        <div className={styles.searchBar}>
                            <button className={styles.searchIcon}>
                                <Icon icon="iconamoon:search-bold" />
                            </button>
                            <input className={styles.searchInput} placeholder="Pesquisar"/>
                        </div>
                        <button className={styles.button}>
                            <Icon icon="ion:filter" />
                        </button>
                    </div>
                    <button className={styles.primaryButton} onClick={showRegisterPatient}>
                        Cadastrar paciente
                    </button>
                </div>
                {patients.length > 0 ? (
                    <table className={styles.grid}>
                        <tr className={styles.gridHeader}>
                            <th><h2 className={styles.secondaryTitle}>#</h2></th>
                            <th><h2 className={styles.secondaryTitle}>Nome</h2></th>
                            <th><h2 className={styles.secondaryTitle}>Ações</h2></th>
                        </tr>
                        <div className={styles.gridItems}>
                            {patients.map((patient, i) => (
                                <tr className={styles.gridItem}>
                                    <td><p className={styles.paragraph}>{i}</p></td>
                                    <td>
                                        <p className={styles.paragraph}>
                                            <Link to={`/patients/${patient.id}`} key={patient.id} className={styles.cardLink}>
                                                {patient.nome}
                                            </Link>
                                        </p>
                                    </td>
                                    <td>
                                        <button className={styles.button} onClick={showEditPatient}>
                                            <Icon icon="prime:pencil" />
                                        </button>
                                        <button className={styles.button} onClick={showDeletePatient}>
                                            <Icon icon="ic:outline-delete" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </div>
                    </table>
                ) : (
                    <div className={styles.messageArea}>
                        <p className={styles.paragraph}>Cadastre pacientes para visualiza-los aqui.</p>
                    </div>
                )}
                
            </div>
            {registerPatient && <RegisterPatient active={setRegisterPatient}/>}
            {editPatient && <EditPatient active={setEditPatient} id={1}/>}
            {deletePatient && <DeletePatient active={setDeletePatient} id={1}/>}
        </div>
    )
}

export default ViewPatients
