import React from "react";
import styles from "./styles.module.css";

const Home = () => {
    const data = [
        {
            name: 'João'
        },
        {
            name: 'Maria'
        }
    ]

    const numbers = data.map((_, index) => index);

    const listItems = numbers.map((number) =>
        <div className={styles.card}>
            {data[number].name}
        </div>
    )

    return (
        <main className={styles.container}>
            <div className={styles.gridContainer}>
                <div className={styles.grid}>
                    {listItems}
                </div>
            </div>
            <div className={styles.buttonArea}>
                <button className={styles.primaryButton}>
                    Cadastrar paciente
                </button>
            </div>
        </main>
    )
}

export default Home