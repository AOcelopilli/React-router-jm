import { Message } from "./Message";
import SongBio from "./SongBio";
import SongLyrics from "./SongLyrics";

const SongDetails = ({ search, lyrics, bio }) => {
  if (!lyrics || !bio) return null;
  return (
    <>
      {lyrics.err || lyrics.name === "AbortError" || lyrics.err ? (
        <Message
          msg={`Error: no existe la canción "<em>${search.song}</em>"`}
          bgColor="#dc3545"
        />
      ) : (
        <SongLyrics title={search.song} lyric={lyrics.lyrics} />
      )}
      {bio.artists ? (
        <SongBio artist={bio.artists[0]} />
      ) : (
        <Message
          msg={`Error: no existe el artista "<em>${search.artist}</em>"`}
          bgColor="#dc3545"
        />
      )}
    </>
  );
};

export default SongDetails;
