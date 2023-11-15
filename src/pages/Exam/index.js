import { React, useState, useEffect } from "react";
import styles from "./styles.module.css";

const Exam = () => {
    const [audios, setAudios] = useState([])
    const [questions, setQuestions] = useState([])
    const [errorMessage, setErrorMessage] = useState(null)
    const [word, setWord] = useState("")

    useEffect(() => {
        const consult = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/v1/exame")
                if (!response.ok) {
                    throw new Error()
                }
                const data = await response.json()
                setAudios(data[0])
                setQuestions(data[1])
            } catch (error) {
                setErrorMessage("Erro ao exibir o tratamento.")
            }
        }
        consult()
    }, [i])

    const handleVerify = async (response) => {
        if (response.toLowerCase().replace(/\s/g, '') === questions[i]) {

        }
    }

    var i = 0

    const decreaseIndex = async () => {
        if (i > 0) {
            i -= 1
        }
        console.log(i)
    }

    const increaseIndex = async () => {
        if (i < questions.length) {
            i += 1
        }
        console.log(i)
    }

    return (
        <div className={styles.container}>
            <div className={styles.contentArea}>
                <h1 className={styles.primaryTitle}>Exame</h1>
                {errorMessage !== null ? (
                    <div className={styles.dataArea}>
                        <div className={styles.audioArea}>
                            <audio src={audios[i]} controls></audio>
                        </div>
                        <div className={styles.inputField}>
                            <label htmlFor="word-input">Digite a palavra do áudio</label>
                            <input id="word-input" className={styles.input} onChange={(e) => setWord(e.target.value)} type="text" required/>
                        </div>
                        <button className={styles.primaryButton} onClick={() => handleVerify(word)}>Verificar resposta</button>
                        <div className={styles.buttonsArea}>
                            <button className={styles.secondaryButton} onClick={() => decreaseIndex()}>Anterior</button>
                            <button className={styles.secondaryButton} onClick={() => increaseIndex()}>Próximo</button>
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

export default Exam