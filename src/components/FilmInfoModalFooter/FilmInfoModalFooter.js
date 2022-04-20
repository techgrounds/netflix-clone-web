import "./FilmInfoModalFooter.scss";
import FilmInfoModalDetailsItem from "../FilmInfoModalDetailsItem/FilmInfoModalDetailsItem";
import FilmInfoModalKijkWijzer from "../FilmInfoModalKijkWijzer/FilmInfoModalKijkWijzer";

const FilmInfoModalFooter = ({
  ref,
  actors,

  directors,
  genres,
  movieData,
  writers,
  certification,
}) => {
  return (
    <section className="modal-footer-container" ref={ref}>
      <div className="modal-footer-header">
        <h2 className="modal-footer-title">
          <span>About</span> {movieData?.title}
        </h2>
      </div>
      <div className="modal-footer-details">
        <FilmInfoModalDetailsItem tagLabel="Actors" tagItems={actors} />
        <FilmInfoModalDetailsItem tagLabel="Director" tagItems={directors} />

        <FilmInfoModalDetailsItem tagLabel="Writer" tagItems={writers} />
        <FilmInfoModalDetailsItem tagLabel="Genres" tagItems={genres} />

        <div className="modal-footer-kijk-wijzer">
          <FilmInfoModalDetailsItem tagLabel="Maturity Rating" />
          <FilmInfoModalKijkWijzer />
        </div>
      </div>
    </section>
  );
};

export default FilmInfoModalFooter;
