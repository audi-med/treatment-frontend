import { React, useState, useEffect } from "react";
import styles from "./styles.module.css";
import { useParams } from "react-router-dom";
//import patients from "../../util/Patients";

const Patient = () => {
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