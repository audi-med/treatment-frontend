import React from "react";
import styles from "./styles.module.css";
import { Icon } from "@iconify/react";

const Home = () => {
    return (
        <div className={styles.container}>
            <section className={styles.section}>
                <div className={styles.contentArea}>
                    <h1 className={styles.primaryTitle}>AudiTech - Clinicas de Tratamento em DPAC</h1>
                    <span className={styles.line}></span>
                    <p class={styles.paragraph}>Desafie os limites do entendimento auditivo indo atrás da melhora com os melhores! Explore nossa plataforma inovadora, tenha acesso a uma diversidade de clinicas. E faça parte da mudança para uma compreensão auditiva completa.</p>
                    <a class={styles.primaryButton} href="/signin">Entrar</a>
                </div>
            </section>
            <section className={styles.section}>
                <h1 className={styles.primaryTitle}>Beneficios</h1>
                <div className={styles.benefitsGrid}>
                    <div className={styles.card}>
                        <img className={styles.image} src="" alt="Imagem do card"/>
                        <h2 className={styles.secondaryTitle}>Facilidade</h2>
                        <p className={styles.paragraph}>Acesso as consultas mesmo em lugares distantes.</p>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.image} src="" alt="Imagem do card"/>
                        <h2 className={styles.secondaryTitle}>Flexibilidade</h2>
                        <p className={styles.paragraph}>Horários flexiveis e maior disponibilidade de médicos.</p>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.image} src="" alt="Imagem do card"/>
                        <h2 className={styles.secondaryTitle}>Organização</h2>
                        <p className={styles.paragraph}>O agendamento das consultas é feito de forma 100% online.</p>
                    </div>
                </div>
            </section>
            <section className={styles.section}>
                <h1 className={styles.primaryTitle}>Licenças</h1>
                <div className={styles.licenseGrid}>
                    <div className={styles.card}>
                        <h2 className={styles.secondaryTitle}>Licença gratuita</h2>
                        <p className={styles.paragraph}>
                            <span className={styles.highlightText}>R$ 0,00</span>/mês
                        </p>
                        <ul className={styles.benefitsList}>
                            <li className={styles.benefit}>
                                <span className={styles.benefitIcon}>
                                    <Icon icon="ic:outline-check" />
                                </span>
                                <p className={styles.paragraph}>Acesso a todos os recursos básicos.</p>
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
