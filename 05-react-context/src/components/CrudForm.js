import { useState, useEffect } from "react";
import { useContext } from "react";
import CrudContext from "../context/CrudProvider";

const initialForm = {
  name: "",
  description: "",
  id: null,
};

const CrudForm = () => {
  const [form, setForm] = useState(initialForm);

  const { createData, updateData, dataToEdit, setDataToEdit } =
    useContext(CrudContext);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.description) {
      alert("Datos incompletos");
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <div>
      <h3>{dataToEdit ? "Editar Vengador" : "Agregar Vengador"}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={handleChange}
          value={form.name}
        />
        <input
          type="text"
          name="description"
          placeholder="Descripcion"
          onChange={handleChange}
          value={form.description}
        />
        <input type="submit" value={dataToEdit ? "Guardar" : "Agregar"} />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
