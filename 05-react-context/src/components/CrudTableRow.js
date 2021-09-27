import React from "react";
import CrudContext from "../context/CrudProvider";
import { useContext } from "react";

const CurdTableRow = ({ el }) => {
  let { name, description, id } = el;
  const { setDataToEdit, deleteData } = useContext(CrudContext);
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
