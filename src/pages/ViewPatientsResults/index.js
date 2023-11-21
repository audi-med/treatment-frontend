import { React, useState, useEffect } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';

const ViewPatientsResults = () => {
    const [patients, setPatients] = useState([])
    const [errorMessage, setErrorMessage] = useState(null)

    useEffect(() => {
        const consult = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/v1/pacientes")
                if (!response.ok) {
                    throw new Error()
                }
                const data = await response.json()
                setPatients(data)
            } catch (error) {
                setErrorMessage("Erro ao exibir os dados dos pacientes.")
            }
        }
        consult()
    }, [])

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
                            <input id="search-input" className={styles.searchInput} placeholder="Pesquisar" />
                        </div>
                        <button className={styles.primaryButton}>
                            <Icon className={styles.icon} icon="ion:filter" />
                            Filtrar
                        </button>
                    </div>
                </div>
                {errorMessage === null ? (
                    patients.length > 0 ? (
                        <div className={styles.tableContainer}>
                            <table className={styles.table}>
                                <thead className={styles.tableHeader}>
                                    <tr className={styles.tableRow}>
                                        <th className={styles.tableItem}><h2 className={styles.secondaryTitle}>#</h2></th>
                                        <th className={styles.tableItem}><h2 className={styles.secondaryTitle}>Nome</h2></th>
                                        <th className={styles.tableItem}><h2 className={styles.secondaryTitle}>CPF</h2></th>
                                        <th className={styles.tableItem}><h2 className={styles.secondaryTitle}>Porcentagem de acerto</h2></th>
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
                                                <p className={styles.paragraph}>{patient.cpf}</p>
                                            </td>
                                            <td className={styles.tableItem}>
                                                <p className={styles.paragraph}>{patient.result}</p>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className={styles.messageArea}>
                            <p className={styles.paragraph}>Cadastre pacientes para visualiza-los aqui.</p>
                        </div>
                    )
                ) : (
                    <div className={styles.messageArea}>
                        <p className={styles.errorMessage}>{errorMessage}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ViewPatientsResults