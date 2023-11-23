import { React, useState, useEffect } from "react";
import styles from "./styles.module.css";
import { Icon } from '@iconify/react';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Label, Tooltip } from 'recharts';
 
const Results = () => {
    /*const [results, setResults] = useState([])*/
    const [errorMessage, setErrorMessage] = useState(null)

    /*useEffect(() => {
        const consult = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/v1/tratamento/resultados")
                if (!response.ok) {
                    throw new Error()
                }
                const data = await response.json()
                setResults(data)
            } catch (error) {
                setErrorMessage("Erro ao exibir os resultados do paciente.")
            }
        }
        consult()
    }, [])*/

    const results = [{result: 75, date: "02/05/2023"}, {result: 83, date: "03/05/2023"}, {result: 91, date: "04/05/2023"}]

    return (
        <div className={styles.container}>
            <div className={styles.contentArea}>
                <div className={styles.headerArea}>
                    <div className={styles.topArea}>
                        <a className={styles.button} href="/patient">
                            <Icon icon="ep:arrow-left" />
                        </a>
                    </div>
                    <h1 className={styles.primaryTitle}>Resultados</h1>
                </div>
                {errorMessage === null ? (
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
                ) : (
                    <div className={styles.messageArea}>
                        <p className={styles.errorMessage}>{errorMessage}</p>
                    </div>
                )}
            </div>
        </div>
    )
}
 
export default Results