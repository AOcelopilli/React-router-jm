import React from "react";

const CurdTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { name, description, id } = el;
  return (
    <tr>
      <td>{name}</td>
      <td>{description}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(name, id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CurdTableRow;
