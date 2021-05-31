import React from "react";
import { useHistory } from "react-router";

const CurdTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { name, description, id } = el;
  let history = useHistory();

  const handleEdit = () => {
    setDataToEdit(el);
    history.push(`/editar/:${id}`);
  };
  return (
    <tr>
      <td>{name}</td>
      <td>{description}</td>
      <td>
        <button onClick={handleEdit}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CurdTableRow;
