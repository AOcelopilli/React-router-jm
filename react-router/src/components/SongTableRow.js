import { useHistory } from "react-router";

const SongTableRow = ({ id, el, handleDeleteSong }) => {
  console.log(el);

  let history = useHistory();
  return (
    <tr>
      <td>
        <img src="https://placeimg.com/400/400/any" alt="any kind of image" />
      </td>
      <td>Nombre artista</td>
      <td>Nombre cancion</td>
      <td>
        <button onClick={() => history.push(`/canciones/${id}`)}>Ver</button>
        <button onClick={handleDeleteSong(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default SongTableRow;
