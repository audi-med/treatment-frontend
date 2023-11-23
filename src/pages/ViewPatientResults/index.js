import { React, useState, useEffect } from "react";
import styles from "./styles.module.css";
import { useParams } from "react-router-dom";
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Label, Tooltip } from 'recharts';

const ViewPatientResults = () => {
    const [patient, setPatient] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    const {id} = useParams();
    
    useEffect(() => {
        const consult = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/v1/pacientes/" + id)
                if (!response.ok) {
                    throw new Error()
                }
                const data = await response.json()
                setPatient(data)
            } catch (error) {
                setErrorMessage("Erro ao exibir os dados do paciente.")
            }
        }
        consult()
    }, [id])

    const results = [{result: 75, date: "02/05/2023"}, {result: 83, date: "03/05/2023"}, {result: 91, date: "04/05/2023"}]

    return (
        <div className={styles.container}>
            <div className={styles.contentArea}>
                <h1 className={styles.primaryTitle}>Paciente</h1>
                {errorMessage === null ? (
                    <div className={styles.dataArea}>
                        <div className={styles.dataContainer}>
                            <p>Nome: {patient.nome}</p>
                            <p>CPF: {patient.cpf}</p>
                            <p>Data de nascimento: {patient.dataDeNascimento}</p>
                            <p>Número de telefone: {patient.numeroDeTelefone}</p>
                            <p>Endereço: {patient.endereco}</p>
                            <p>Nome do responsavel: {patient.nomeDoResponsavel}</p>
                            <p>CPF do responsavel: {patient.cpfDoResponsavel}</p>
                        </div>
                        <div className={styles.chartArea}>
                            <h2 className={styles.secondaryTitle}>Resultados</h2>
                            <div className={styles.chartContainer}>
                                <ResponsiveContainer width="100%" height={400}>
                                    <LineChart data={results}>
                                        <Line name="Porcentagem de acertos" type="monotone" dataKey="result" stroke="#8884d8" unit="%" />
                                        <CartesianGrid stroke="#ccc" />
                                        <XAxis dataKey="date">
                                            <Label value="Data" offset={0} position="insideBottom" />
                                        </XAxis>
                                        <YAxis unit="%">
                                            <Label value="Porcentagem de acertos" angle={-90} position="insideLeft" />
                                        </YAxis>
                                        <Tooltip />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                ):(
                    <div className={styles.messageArea}>
                        <p className={styles.errorMessage}>{errorMessage}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ViewPatientResults
