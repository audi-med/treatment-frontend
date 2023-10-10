import React from "react";
import styles from "./styles.module.css";
import { useParams } from "react-router-dom";
import patients from "../../util";

const Patient = () => {
    const {slug} = useParams();

    const patient = patients.find(item => item.slug === slug);

    return (
        <div className={styles.contentArea}>
            <p>Nome: {patient.name}</p>
            <p>CPF: {patient.cpf}</p>
        </div>
    )
}

export default Patient