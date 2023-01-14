import React from "react";
import { Film } from "../../types/Film";
import './FilmsList.scss';

interface Props {
  films: Film[],
  onSelectFilm: (value: Film) => void,
}

export const FilmsList: React.FC<Props> = ({ films, onSelectFilm }) => {
  return (
    <ul className="films">
      {films.map((film, idx) => (
        <li key={idx}>
          <a
            onClick={() => onSelectFilm(film)}
          >
            {film.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
