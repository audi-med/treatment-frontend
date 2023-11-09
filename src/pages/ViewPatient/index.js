import React, { useEffect, useState } from "react";
import styles from "./styles.css";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const ViewPatient = () => {
  const [patient, setPatient] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const consultar = async () => {
      try {
        const resposta = await fetch(
          `http://localhost:8080/api/v1/pacientes/${id}`,
        );
        if (!resposta.ok) {
          throw new Error();
        }
        const dados = await resposta.json();
        console.log(JSON.stringify(dados));
        setPatient(dados);
      } catch (error) {
        setErrorMessage("Erro ao exibir os dados do paciente.");
      }
    };
    consultar();
  }, [id]);

  return (
    <div>
    <span class="main_bg"/>
    <div class="container">
        <header>
        </header>
        <section class="userProfile card">
            <div class="profile">
                <figure><img src="../../images/user-icon.png" alt="profile" width="250px" height="250px"/></figure>
            </div>
        </section>
        <section class="userDetails card">
            <div class="userName">
                <h1 class="name">{patient.nome}</h1>
                <p>Paciente ID: {patient.id}</p>
            </div>

            <div class="rank">
                <h1 class="heading">Tabela de Tratamento</h1>
                aqui será o dashboard do paciente
            </div>
        </section>

        <section class="timeline_about card">
            <div class="contact_Info">
                <h3 class="heading">Informação</h3>
                <ul>
                    <li class="phone">
                        <h4 class="label">Telefone:</h4>
                        <span class="info">{patient.numeroDeTelefone}</span>
                    </li>

                    <li class="address">
                        <h4 class="label">Endereço:</h4>
                        <span class="info">{patient.endereco}</span>
                    </li>

                    <li class="email">
                        <h4 class="label">E-mail:</h4>
                        <span class="info">{patient.email}</span>
                    </li>

                    <li class="site">
                        <h4 class="label">Nome Responsável:</h4>
                        <span class="info">{patient.nomeDoResponsavel}</span>
                    </li>

                    <li class="site">
                        <h4 class="label">CPF Responsável:</h4>
                        <span class="info">{patient.cpfDoResponsavel}</span>
                    </li>

                    <li class="site">
                        <h4 class="label">Data Nascimento:</h4>
                        <span class="info">{patient.dataDeNascimento}</span>
                    </li>

                    <li class="site">
                        <h4 class="label">Endereço:</h4>
                        <span class="info">{patient.endereco}</span>
                    </li>
                </ul>
            </div>

        </section>
    </div>

    </div>
  );
};

export default ViewPatient;

/*
      <div className={styles.container}>
        <div className={`${styles.contentArea} ${styles.flexContainer}`}>
        <img src="../../images/user-icon.png" alt="Foto do Paciente" />
        <h1 className={styles.primaryTitle}>{patient.nome}</h1>
          <div className={styles.dataAreaItem}>
              <p>ID: {patient.id}</p>
              <p>CPF: {patient.cpf}</p>
              <p>Nome do responsavel: {patient.nomeDoResponsavel}</p>
              <p>CPF do responsavel: {patient.cpfDoResponsavel}</p>
          </div>
          
          <div className={`${styles.dataAreaItem} ${styles.dataAreaRight}`}>
              <p>Numero de telefone: {patient.numeroDeTelefone}</p>
              <p>Data de nascimento: {patient.dataDeNascimento}</p>
              <p>Endereço: {patient.endereco}</p>
          </div>
        </div>
      </div>
      */