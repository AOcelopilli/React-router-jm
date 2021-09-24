import { useParams } from "react-router";
import SongDetails from "./SongDetails";

const SongPage = ({ mySongs }) => {
  let { id } = useParams();
  console.log(id, mySongs, mySongs[id]);

  let currentSong = mySongs[id];
  let { search, lyrics, bio } = currentSong;

  return <SongDetails search={search} lyrics={lyrics} bio={bio} />;
};

export default SongPage;
