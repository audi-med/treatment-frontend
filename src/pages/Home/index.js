import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const Home = () => {
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

    return (
        <React.Fragment>
            {data.length  > 0 ? (
                <React.Fragment>
                    <div className={styles.gridContainer}>
                        <div className={styles.grid}>
                            {data.map((item) => (
                                <Link to={`/patient/${item.slug}`} key={item.slug} className={styles.cardLink}>
                                    <div className={styles.card}>
                                        {item.name}         
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className={styles.buttonArea}>
                        <button className={styles.primaryButton}>
                            Cadastrar paciente
                        </button>
                    </div>
                </React.Fragment>
            ) : (
                <p>Cadastre pacientes para visualiza-los aqui.</p>
            )}
        </React.Fragment>
    )
}

export default Home