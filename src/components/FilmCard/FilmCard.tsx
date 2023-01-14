import React, { useCallback, useEffect, useState } from "react";
import { get } from "../../api";
import { Character, Film } from "../../types/Film";
import { convertDateToYear } from "../../utils";
interface Props {
  film: Film,
  deselectFilm: (value: null) => void,
}

export const FilmCard: React.FC<Props> = ({ film, deselectFilm }) => {
  const [characters, setCharacters] = useState<Character[]>([]);

  const fetchCharacters = useCallback(async () => {
    try {
      //do something
    } catch(error) {
      //do something
    }
  }, []);

  useEffect(() => {
    fetchCharacters()
  }, []);

  return (
    <div>
      <h1>
        {`${film.title} (${convertDateToYear(film.release_date)})`}
      </h1>
      <ul>
        {characters.map((character) => (
          <li>{character.name}</li>
        ))}
      </ul>

      <button
        onClick={() => deselectFilm(null)}
        >
        Go Back
      </button>
    </div>
  );
};
