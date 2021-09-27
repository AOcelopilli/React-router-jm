import React, { useState } from "react";

export default function Formularios() {
  /* const [nombre, setNombre] = useState("");
  const [sabor, setSabor] = useState("");
  const [lenguaje, setLenguaje] = useState("");
  const [terminos, setTerminos] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("El formulario se ha enviado");
  };
  return (
    <>
      <h2>Formularios</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre: </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          defaultValue={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <p>Elige tu sabor JS favorito</p>
        <input
          type="radio"
          name="sabor"
          id="vanilla"
          value="Vanilla"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="vanilla">Vanilla</label>
        <input
          type="radio"
          name="sabor"
          id="react"
          value="React"
          onChange={(e) => setSabor(e.target.value)}
          defaultChecked
        />
        <label htmlFor="react">React</label>
        <input
          type="radio"
          name="sabor"
          id="angular"
          value="Angular"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="angular">Angular</label>
        <input
          type="radio"
          name="sabor"
          id="svelte"
          value="Svelte"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="svelte">Svelte</label>
        <input
          type="radio"
          name="sabor"
          id="vue"
          value="Vue"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="vue">Vue</label>
        <p>Elige tu lenguaje de programación favorito</p>
        <select
          name="lenguaje"
          onChange={(e) => setLenguaje(e.target.value)}
          defaultValue=""
        >
          <option value="">---</option>
          <option value="js">JavaScript</option>
          <option value="php">PHP</option>
          <option value="py">Python</option>
          <option value="go">GO</option>
          <option value="rb">Ruby</option>
        </select>
        <br />
        <label htmlFor="terminos">Acepto terminos y condiciones</label>
        <input
          type="checkbox"
          name="terminos"
          id="terminos"
          onChange={(e) => setTerminos(e.target.checked)}
        />
        <br />
        <input type="submit" />
      </form>
    </>
  ); */

  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("El formulario se ha enviado");
  };
  return (
    <>
      <h2>Formularios</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre: </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          defaultValue={form.nombre}
          onChange={handleChange}
        />
        <p>Elige tu sabor JS favorito</p>
        <input
          type="radio"
          name="sabor"
          id="vanilla"
          value="Vanilla"
          onChange={handleChange}
        />
        <label htmlFor="vanilla">Vanilla</label>
        <input
          type="radio"
          name="sabor"
          id="react"
          value="React"
          onChange={handleChange}
          defaultChecked
        />
        <label htmlFor="react">React</label>
        <input
          type="radio"
          name="sabor"
          id="angular"
          value="Angular"
          onChange={handleChange}
        />
        <label htmlFor="angular">Angular</label>
        <input
          type="radio"
          name="sabor"
          id="svelte"
          value="Svelte"
          onChange={handleChange}
        />
        <label htmlFor="svelte">Svelte</label>
        <input
          type="radio"
          name="sabor"
          id="vue"
          value="Vue"
          onChange={handleChange}
        />
        <label htmlFor="vue">Vue</label>
        <p>Elige tu lenguaje de programación favorito</p>
        <select name="lenguaje" onChange={handleChange} defaultValue="">
          <option value="">---</option>
          <option value="js">JavaScript</option>
          <option value="php">PHP</option>
          <option value="py">Python</option>
          <option value="go">GO</option>
          <option value="rb">Ruby</option>
        </select>
        <br />
        <label htmlFor="terminos">Acepto terminos y condiciones</label>
        <input
          type="checkbox"
          name="terminos"
          id="terminos"
          onChange={handleChecked}
        />
        <br />
        <input type="submit" />
      </form>
    </>
  );
}
