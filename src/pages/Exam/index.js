import { React, useState, useEffect } from "react";
import styles from "./styles.module.css";

const Exam = () => {
    const [questions, setQuestions] = useState([])
    const [errorMessage, setErrorMessage] = useState(null)
    const [word, setWord] = useState("")
    const [answered, setAnswered] = useState(false)
    const [correctAnswer, setCorrectAnswer] = useState(false)

    useEffect(() => {
        const consult = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/v1/tratamento/audio")
                if (!response.ok) {
                    throw new Error()
                }
                const data = await response.json()
                setQuestions(data)
            } catch (error) {
                setErrorMessage("Erro ao exibir o tratamento.")
            }
        }
        consult()
    }, [])

    const handleVerify = async (response) => {
        if (!response) {
            setAnswered(true)
        }

        if (response.toLowerCase().replace(/\s/g, '') === questions[i]) {
            setCorrectAnswer(true)
        } else {
            setCorrectAnswer(false)
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
        if (i < questions.length - 1) {
            i += 1
        }
        console.log(i)
    }

    const handleFinalize = async () => {
        
    }

    return (
        <div className={styles.container}>
            <div className={styles.contentArea}>
                <h1 className={styles.primaryTitle}>Tratamento</h1>
                {errorMessage !== null ? (
                    <div className={styles.dataArea}>
                        <div className={styles.audioArea}>
                            <audio src={questions[i].audio} controls></audio>
                            {answered && (
                                correctAnswer ? (
                                    <p className={styles.correctAnswer}>Resposta correta</p>
                                ) : (
                                    <p className={styles.incorrectAnswer}>Resposta incorreta</p>
                                )
                            )}
                        </div>
                        <div className={styles.inputField}>
                            <label htmlFor="word-input">Digite a palavra do áudio</label>
                            <input id="word-input" className={styles.input} onChange={(e) => setWord(e.target.value)} type="text" required/>
                        </div>
                        <button className={styles.primaryButton} onClick={() => handleVerify(word)}>Verificar resposta</button>
                        <p className={styles.paragraph}>{i + 1} de {questions.length}</p>
                        <div className={styles.buttonsArea}>
                            {i === 0 ? (
                                <button className={styles.secondaryButton} disabled>Anterior</button>
                            ):(
                                <button className={styles.secondaryButton} onClick={() => decreaseIndex()}>Anterior</button>
                            )}
                            {questions.length === 0 || i === questions.length - 1 || answered === false ? (
                                <button className={styles.secondaryButton} disabled>Próximo</button>
                            ):(
                                <button className={styles.secondaryButton} onClick={() => increaseIndex()}>Próximo</button>
                            )}
                            {i === questions.length - 1 && (
                                <button className={styles.secondaryButton} onClick={() => handleFinalize()}>Finalizar</button>
                            )}
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
