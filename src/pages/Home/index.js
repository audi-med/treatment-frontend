import React from "react";
import styles from "./styles.module.css";
import { Icon } from '@iconify/react';

const Home = () => {
    return (
        <div className={styles.container}>
            <section className={styles.section}>
                <h1></h1>
                <p className={styles.paragraph}></p>
                <button className={styles.primaryButton}>Entrar</button>
            </section>
            <section className={styles.section}>
                <div className={styles.grid}>
                    <div className={styles.contentArea}>
                        <h3></h3>
                        <p className={styles.paragraph}></p>
                    </div>
                    <div className={styles.contentArea}>
                        <h3></h3>
                        <p className={styles.paragraph}></p>
                    </div>
                    <div className={styles.contentArea}>
                        <h3></h3>
                        <p className={styles.paragraph}></p>
                    </div>
                </div>
            </section>
            <section className={styles.section}>
                <h2>Licenças</h2>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h3>Licença gratuita</h3>
                        <p className={styles.paragraph}><span className={styles.highlightText}>R$ 0,00</span>/mês</p>
                        <ul className={styles.benefitsList}>
                            <li className={styles.benefit}>
                                <span className={styles.benefitIcon}><Icon icon="ic:outline-check" /></span><p className={styles.paragraph}>Acesso a todos os recursos básicos.</p>
                            </li>
                        </ul>
                        <button className={styles.primaryButton}>Entrar</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home