import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
 
const Exam = () => {
    const [audioPairs, setAudioPairs] = useState([])
    const [currentPairIndex, setCurrentPairIndex] = useState(0)
    const [errorMessage, setErrorMessage] = useState(null)
    const [word, setWord] = useState("")
    const [answered, setAnswered] = useState(false)
    const [correctAnswer, setCorrectAnswer] = useState(false)
    const responses = []

    const navigate = useNavigate()
 
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/v1/tratamento/audio")
                if (!response.ok) {
                    throw new Error()
                }
                const data = await response.json()
                setAudioPairs(data)
            } catch (error) {
                setErrorMessage("Erro ao exibir o tratamento.")
            }
        }
        fetchData()
    }, [])
 
    const handleVerify = () => {
        if (!word) {
            setAnswered(true)
            return
        }
 
        const currentPair = audioPairs[currentPairIndex]
        const isCorrect = word.toLowerCase().replace(/\s/g, "") === currentPair.palavra
 
        setAnswered(true)
        setCorrectAnswer(isCorrect)
        responses[currentPairIndex] = isCorrect
    }
 
    const decreaseIndex = () => {
        if (currentPairIndex > 0) {
            setCurrentPairIndex(currentPairIndex - 1)
        }
    }
 
    const increaseIndex = () => {
        if (currentPairIndex < audioPairs.length - 1) {
            setCurrentPairIndex(currentPairIndex + 1)
            setAnswered(false)
        }
    }
 
    const handleFinalize = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/v1/tratamento/resultado", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(responses)
            })
            if (!response.ok) {
                throw new Error("Erro ao cadastrar os resultados.")
            }
            navigate("/patient")
        } catch (error) {
            setErrorMessage("Erro ao cadastrar os resultados. Verifique os dados informados.")
        }
    }
 
    const playAudio = () => {
        const currentPair = audioPairs[currentPairIndex]
        const audio = new Audio(`data:audio/wavbase64,${currentPair.audio}`)
        audio.play()
    }
 
    return (
        <div className={styles.container}>
            <div className={styles.contentArea}>
                <div>
                    <div className={styles.topArea}>
                        <a className={styles.button} href="/patient">
                            <Icon icon="ep:arrow-left" />
                        </a>
                    </div>
                    <h1 className={styles.primaryTitle}>Tratamento</h1>
                </div>
                {errorMessage === null ? (
                    <div className={styles.dataArea}>
                        <div className={styles.audioArea}>
                            {audioPairs.length > 0 && (
                                <div>
                                    <button className={styles.secondaryButton} onClick={playAudio}>Reproduzir Áudio</button>
                                    {answered && (
                                        <p className={correctAnswer ? styles.correctAnswer : styles.incorrectAnswer}>
                                            {correctAnswer ? "Resposta correta" : "Resposta incorreta"}
                                        </p>
                                    )}
                                </div>
                            )}
                        </div>
                        <div className={styles.inputField}>
                            <label htmlFor="word-input">Digite a palavra do áudio</label>
                            <input id="word-input" className={styles.input} onChange={(e) => setWord(e.target.value)} type="text" required />
                        </div>
                        <button className={styles.primaryButton} onClick={handleVerify}>
                            Verificar resposta
                        </button>
                        <p className={styles.paragraph}>
                            {audioPairs.length > 0 ? currentPairIndex + 1 : currentPairIndex} de {audioPairs.length}
                        </p>
                        <div className={styles.buttonsArea}>
                            <button className={styles.secondaryButton} onClick={decreaseIndex} disabled={currentPairIndex === 0}>
                                Anterior
                            </button>
                            <button className={styles.secondaryButton} onClick={increaseIndex} disabled={currentPairIndex === audioPairs.length - 1 || !answered}>
                                Próximo
                            </button>
                            {currentPairIndex === audioPairs.length - 1 && (
                                <button className={styles.secondaryButton} onClick={handleFinalize}>
                                    Finalizar
                                </button>
                            )}
                        </div>
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
 
export default Exam