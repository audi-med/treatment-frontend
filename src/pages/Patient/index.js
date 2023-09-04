import React from "react";
import styles from "./styles.module.css";
import { useParams } from "react-router-dom";

const Patient = () => {
    const {slug} = useParams();

    const data = [
        {
            slug: '0',
            name: 'João'
        },
        {
            slug: '1',
            name: 'Maria'
        }
    ]

    const patient = data.find(item => item.slug === slug);

    return (
        <main className={styles.container}>
            <p>Nome: {patient.name}</p>
        </main>
    )
}

export default Patient