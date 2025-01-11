import React from "react";
import styles from "../assets/styles/Contato.module.css";
import contato from "../assets/img/contato.jpg";
import Head from "./Head";

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Ranek | Contato" description="Entre em contato." />
      <img src={contato} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <li>diogo@gmail.com</li>
          <li>98765 4321</li>
          <li>Avenida Paulista, 1000</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
