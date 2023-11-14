import React from "react";
import styles from "./styles.module.css";
import { Icon } from "@iconify/react";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className={styles.container}>

        <section className={styles.section}>
      <div class="container px-4 px-lg-5 h-100">
        <div
          class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center"
        >
          <div class="col-lg-8 align-self-end">
            <h1 class="font-weight-bold">AudiTech - Clinicas de Tratamento em DPAC</h1>
            <hr class="divider" />
          </div>
          <div class="col-lg-8 align-self-baseline">
            <p class="text-white-75 mb-5">
            Desafie os limites do entendimento auditivo indo atrás da melhora com os melhores! Explore nossa plataforma inovadora, tenha acesso a uma diversidade de clinicas. E faça parte da mudança para uma compreensão auditiva completa.
            </p>
            <a class="btn btn-primary btn-xxl font-weight-bold" href="/signin">Entrar</a>
          </div>
        </div>
      </div>
      </section>
      <section className={styles.section}>
        <h1 className={styles.primaryTitle}>Beneficios</h1>
        <div className={styles.benefitsGrid}>
          <div className="card" style={{ width: "18rem" }}>
            <img src="./img/facilidade.jfif" class="card-img-top" alt="Imagem" />
            <div class="card-body">
              <h5 class="card-title">Facilidade</h5>
              <p class="card-text">
                Fácil acessibilidade para o uso dos serviços do site.
              </p>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }}>
            <img src="./img/flexibilidade.avif" class="card-img-top" alt="Imagem" />
            <div class="card-body">
              <h5 class="card-title">Flexibilidade</h5>
              <p class="card-text">
                Horários flexiveis de agendamento com grande disponibilidade de
                médicos.
              </p>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }}>
            <img src="..." class="card-img-top" alt="Imagem" />
            <div class="card-body">
              <h5 class="card-title">Organização</h5>
              <p class="card-text">
                O agendamento das consultas é feito de forma 100% online, junto
                com os tratamentos feitos de forma 100% remota.
              </p>
            </div>
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
                <p className={styles.paragraph}>
                  Acesso a todos os recursos básicos.
                </p>
              </li>
            </ul>
            <button className={styles.primaryButton}>Entrar</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
