import React, { useState } from "react";

const SongForm = ({ handleSearch, handleSaveSong }) => {
  const initialForm = {
    artist: "",
    song: "",
  };

  const [form, setForm] = useState(initialForm);
  const [isDisable, setIsDisable] = useState(true);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.artist || !form.song) {
      alert("Datos incompletos");
      setIsDisable(true);
    }

    handleSearch(form);
    setForm(initialForm);
    setIsDisable(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="artist"
          placeholder="Nombre del Intérprete"
          onChange={handleChange}
          value={form.artist}
        />
        <input
          type="text"
          name="song"
          placeholder="Nombre de la Canción"
          onChange={handleChange}
          value={form.song}
        />
        <input type="submit" value="Enviar" />
        <input
          type="button"
          onClick={handleSaveSong}
          value="Agregar a favoritos"
          disabled={isDisable && "disabled"}
        />
      </form>
    </div>
  );
};

export default SongForm;
