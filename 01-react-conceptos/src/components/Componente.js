import React /* { Component } */ from "react";

/* class Componente extends Component {
  //Las props automaticamente se abdieren a mi componente
  render() {
    return <h2>{this.props.msg}</h2>;
  }
} */

/* function Componente(props) {
  //Funcion declarada
  return <h2>{props.msg}. Esto es un componente funcional</h2>;
} */

//funcion expresada con props destructuradas
const Componente = ({ msg }) => <h2>Funcion expresada. {msg}.</h2>;
export default Componente;
