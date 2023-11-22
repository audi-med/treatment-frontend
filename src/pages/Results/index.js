import { React, useState, useEffect } from "react";
import styles from "./styles.module.css";
import { Icon } from '@iconify/react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
 
const Results = () => {
    const [errorMessage, setErrorMessage] = useState(null)
    
    const data = [{name: 'Page A', uv: 400}, {name: 'Page B', uv: 200}]

    return (
        <div className={styles.container}>
            <div className={styles.contentArea}>
                <div>
                    <div className={styles.topArea}>
                        <a className={styles.button} href="/patient">
                            <Icon icon="ep:arrow-left" />
                        </a>
                    </div>
                    <h1 className={styles.primaryTitle}>Resultados</h1>
                </div>
                {errorMessage === null ? (
                    <div className={styles.dataArea}>
                        <LineChart width={600} height={300} data={data}>
                            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                            <CartesianGrid stroke="#ccc" />
                            <XAxis dataKey="name" />
                            <YAxis />
                        </LineChart>
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