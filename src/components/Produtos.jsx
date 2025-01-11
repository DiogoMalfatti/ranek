import React from "react";
import styles from "../assets/styles/Produtos.module.css";
import { Link } from "react-router-dom";
import Head from "./Head";

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function fecthProdutos(url) {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setProdutos(json);
      } catch (erro) {
        setError("Um erro ocorreu.");
      }
    }
    fecthProdutos("https://ranekapi.origamid.dev/json/api/produto");
  }, []);

  if (error) {
    return <p>{error}</p>;
  }
  if (produtos === null) {
    return null;
  }
  return (
    <section className={`${styles.produtos} animeLeft`}>
      <Head title="Ranek" description="Descrição do site Ranek" />
      {produtos.map((produto) => (
        <Link to={`produto/${produto.id}`} key={produto.id}>
          <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
          <h1 className={styles.nome}>{produto.nome}</h1>
        </Link>
      ))}
    </section>
  );
};

export default Produtos;
