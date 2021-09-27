import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDB = [
  {
    id: 1,
    name: "Iron Man",
    description: "Hombre de Acero",
  },
  {
    id: 2,
    name: "Capitan America",
    description: "El primer vengador",
  },
  {
    id: 3,
    name: "Black Widow",
    description: "Espia",
  },
  {
    id: 4,
    name: "Ojo de Halcon",
    description: "Arquero",
  },
  {
    id: 5,
    name: "Hulk",
    description: "Aplasta todo",
  },
];

export const CrudApp = () => {
  const [db, setDb] = useState(initialDB);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    // console.log(data);
    data.id = Date.now();
    setDb([...db, data]);
  };
  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };
  const deleteData = (name, id) => {
    if (id) {
      let isDelete = window.confirm(
        `Estas seguro de eliminar el elemento "${name}"`
      );

      if (isDelete) {
        let newData = db.filter((el) => el.id !== id);
        setDb(newData);
      } else {
        return;
      }
    }
  };
  return (
    <div>
      <h2>CRUD App</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      </article>
    </div>
  );
};

export default CrudApp;
