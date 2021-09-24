const SongBio = ({ artist }) => {
  return (
    <section>
      <h3>{artist.strArtist}</h3>
      <img src={artist.strArtistThumb} alt={artist.strArtist} />
      <p>
        {artist.intFormedYear} - {artist.intDiedYear || "Actualmente"}
      </p>
      <p>{artist.strCountry}</p>
      <p>{artist.strGenre}</p>
      <a href={`https://${artist.strWebsite}`} target="_blank" rel="noreferrer">
        Sitio Web
      </a>
      <p>{artist.strBiographyES || artist.strBiographyEN}</p>
    </section>
  );
};

export default SongBio;
