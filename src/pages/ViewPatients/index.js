import { React, useState, useEffect } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import RegisterPatient from "../../components/RegisterPatient";
import EditPatient from "../../components/EditPatient";
import DeletePatient from "../../components/DeletePatient";

const ViewPatients = () => {
    const [patients, setPatients] = useState([])
    const [errorMessage, setErrorMessage] = useState(null)
    const [selectedPatient, setSelectedPatient] = useState(null)
    const [selectedAction, setSelectedAction] = useState(null)

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
    })

    const showRegisterPatient = () => {
        setSelectedPatient(null)
        setSelectedAction('register')
    }

    const openPatientModal = (id, action) => {
        setSelectedPatient(id)
        setSelectedAction(action)
    }

    const closePatientModal = () => {
        setSelectedPatient(null)
        setSelectedAction(null)
    }

    return (
        <div className={styles.container}>
            <div className={styles.contentArea}>
                <h1 className={styles.primaryTitle}>Pacientes</h1>
                <div className={styles.optionsArea}>
                    <div className={styles.searchArea}>
                        <div className={styles.searchBar}>
                            <button title="Pesquisar" className={styles.searchIcon}>
                                <Icon icon="iconamoon:search-bold" />
                            </button>
                            <input className={styles.searchInput} placeholder="Pesquisar" />
                        </div>
                        <button className={styles.primaryButton}>
                            <Icon className={styles.icon} icon="ion:filter" />
                            Filtrar
                        </button>
                    </div>
                    <button className={styles.primaryButton} onClick={showRegisterPatient}>
                        <Icon className={styles.icon} icon="akar-icons:plus" />
                        Cadastrar paciente
                    </button>
                </div>
                {patients.length > 0 ? (
                    <table className={styles.table}>
                        <thead className={styles.tableHeader}>
                            <tr className={styles.tableRow}>
                                <th className={styles.tableItem}><h2 className={styles.secondaryTitle}>#</h2></th>
                                <th className={styles.tableItem}><h2 className={styles.secondaryTitle}>Nome</h2></th>
                                <th className={styles.tableItem}><h2 className={styles.secondaryTitle}>Ações</h2></th>
                            </tr>
                        </thead>
                        <tbody className={styles.tableBody}>
                            {patients.map((patient, i) => (
                                <tr className={styles.tableRow} key={patient.id}>
                                    <td className={styles.tableItem}>
                                        <p className={styles.paragraph}>{i + 1}</p>
                                    </td>
                                    <td className={styles.tableItem}>
                                        <p className={styles.paragraph}>
                                            <Link to={`/patients/${patient.id}`} className={styles.cardLink}>
                                                {patient.nome}
                                            </Link>
                                        </p>
                                    </td>
                                    <td className={styles.tableItem}>
                                        <div className={styles.actionsArea}>
                                            <button title="Editar" className={styles.button} onClick={() => openPatientModal(patient.id, 'edit')}>
                                                <Icon icon="prime:pencil" />
                                            </button>
                                            <button title="Excluir" className={styles.button} onClick={() => openPatientModal(patient.id, 'delete')}>
                                                <Icon icon="ic:outline-delete" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className={styles.messageArea}>
                        <p className={styles.paragraph}>Cadastre pacientes para visualiza-los aqui.</p>
                    </div>
                )}
                {selectedAction === 'register' && (
                    <RegisterPatient onClose={closePatientModal} />
                )}
                {selectedPatient !== null && (
                    <div>
                        {selectedAction === 'edit' && (
                            <EditPatient id={selectedPatient} onClose={closePatientModal} />
                        )}
                        {selectedAction === 'delete' && (
                            <DeletePatient id={selectedPatient} onClose={closePatientModal} />
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ViewPatients
