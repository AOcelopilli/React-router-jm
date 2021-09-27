import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import { EventosES6, EventosES7, MasSobreEventos } from "./components/Eventos";
import Padre from "./components/ComunicacionComponentes";
import CicloVida from "./components/CicloVida";
import AjaxApis from "./components/AjaxApis";
import ContadorHooks from "./components/ContadorHooks";
import ScrollHooks from "./components/ScrollHooks";
import RelojHooks from "./components/RelojHooks";
import AjaxHooks from "./components/AjaxHooks";
import HooksPersonalizados from "./components/HooksPersonalizados";
import Referencias from "./components/Referencias";
import Formularios from "./components/Formularios";
import Estilos from "./components/Estilos";

function App() {
  let nombre = "Angel";
  let auth = true;
  let seasons = ["primavera", "verano", "otoño", "invieno"];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" /> */}
        <h1>{nombre}</h1>
        <p>
          {auth ? "El usuario esta logueado" : "El usuario no esta logueado"}
        </p>
        <p>
          Editar <code>src/App.js</code> and save to reload.
        </p>

        {/*  <ul>
          {seasons.map((season, idx) => (
            <li key={idx}>{season}</li>
          ))}
        </ul> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <section>
          <Componente msg="Hola soy un componente con mensaje por props" />
          <hr />
          <Propiedades
            cadena="Esto es un texto"
            numero={25}
            booleano={true}
            arreglo={[1, 2, 3]}
            objeto={{ nombre: "Angel", apellido: "Pineda" }}
            elementoReact={<i>Elemento de react</i>}
            funcion={(num) => num * num}
            componenteReact={
              <Componente msg="Soy un componente pasado como prop" />
            }
          />
          <hr />
          <Estado />
          <hr />
          <RenderizadoCondicional />
          <hr />
          <RenderizadoElementos seasons={seasons} />
          <hr />
          <EventosES6 />
          <hr />
          <EventosES7 />
          <hr />
          <MasSobreEventos />
          <hr />
          <Padre />
          <hr />
          <CicloVida />
          <hr />
          <AjaxApis />
          <hr />
          <ContadorHooks titulo="seguidores" />
          <hr />
          <ScrollHooks />
          <hr />
          <RelojHooks />
          <hr />
          <AjaxHooks />
          <hr />
          <HooksPersonalizados />
          <hr />
          <Referencias />
          <hr />
          <Formularios />
          <br />
          <br />
          <hr />
          <Estilos />
        </section>
      </header>
    </div>
  );
}

export default App;
