import { useHistory } from "react-router";

const SongTableRow = ({ id, el, handleDeleteSong }) => {
  let { bio, search } = el;
  let avatar = bio.artists[0].strArtistThumb;

  let avatarStyle = {
    width: "auto",
    height: "40px",
    borderRadius: "1rem",
  };

  let history = useHistory();
  return (
    <tr>
      <td>
        <img src={avatar} alt={search.artists} style={avatarStyle} />
      </td>
      <td>{search.artists}</td>
      <td>{search.song}</td>
      <td>
        <button onClick={() => history.push(`/${id}`)}>Ver</button>
        <button onClick={() => handleDeleteSong(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default SongTableRow;
