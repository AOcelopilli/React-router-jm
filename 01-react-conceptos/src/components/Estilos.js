import React from "react";
import "./Estilos.css";
import moduleStyle from "./Estilos.module.css";
import "./Estilos.scss";

export default function Estilos() {
  let myStyles = {
    borderRadius: ".5rem",
    margin: "2rem auto",
    maxWidth: "50%",
  };
  return (
    <>
      <section className="estilos">
        <h2>Estilos CSS en React</h2>
        <h3 className="bg-react">Estilos en hojas CSS externa</h3>
        <h3
          className="bg-react"
          style={{ borderRadius: ".25rem", margin: "1rem" }}
        >
          Estilos en linea (atributo style)
        </h3>
        <h3 className="bg-react" style={myStyles}>
          Estilos en linea
        </h3>
        <h3 className="bg-react">Utilizando "@import-normalize"</h3>
        <h3 className={moduleStyle.error}>Estilos con modulos</h3>
        <h3 className={moduleStyle.success}>Estilos con modulos</h3>
        <h3 className="bg-sass">Estilos con SASS</h3>
      </section>
    </>
  );
}
