import ProtTypes from "prop-types";

function Movie({ medium_cover_image, title, year, summary, genres }) {
  return (
    <div>
      <h2>
        {title} - {year}
      </h2>

      <img src={medium_cover_image} alt="{title}" className="left" />
      <p>{summary} </p>
      <ul>
        <h3>Genres</h3>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.ProtTypes = {
  medium_cover_image: ProtTypes.string.isRequired,
  title: ProtTypes.string.isRequired,
  summary: ProtTypes.string.isRequired,
  genres: ProtTypes.arrayOf(ProtTypes.string).isRequired,
};

export default Movie;
