/*const patients = [
    {
        slug: '0',
        name: 'João',
        cpf: '111.111.111-11',
        birthDate: '',
        email: '',
        password: '',
        address: ''
    },
    {
        slug: '1',
        name: 'Maria',
        cpf: '222.222.222-22',
        birthDate: '',
        email: '',
        password: '',
        address: ''
    }
]*/

import { useState, useEffect } from "react";

const Patients = () => {
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
}

export default Patients