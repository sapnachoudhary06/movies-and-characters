import React, { useCallback, useEffect, useState } from "react";
import { get } from "../../api";
import { Character, Film } from "../../types/Film";
import { convertDateToYear } from "../../utils";
import { Loader } from "../Loader";
interface Props {
  film: Film,
  deselectFilm: (value: null) => void,
}

export const FilmCard: React.FC<Props> = ({ film, deselectFilm }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [characters, setCharacters] = useState<Character[]>([]);

  const fetchCharacters = useCallback(async () => {
    setIsLoading(true);
    try {
      //do something
      const fetchedCharacters = film.characters.map(async (characterUrl) => {
        const fetchedCharacter = await get<Character>(characterUrl)
        console.log(fetchedCharacter);
        return fetchedCharacter;
      });

      await Promise.all(fetchedCharacters)
        .then((values) => {
          setCharacters(values);
        });
    } catch(error) {
      //do something
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchCharacters()
  }, []);
  console.log('characters are', characters);

  return (
    <div>
      <h1>
        {`${film.title} (${convertDateToYear(film.release_date)})`}
      </h1>

      {isLoading && (
        <Loader />
      )}

      {characters.length > 0 && !isLoading && (
        <ul>
          {characters.map((character) => (
            <li>{character.name}</li>
          ))}
        </ul>
      )}
      <button
        onClick={() => deselectFilm(null)}
        >
        Go Back
      </button>
    </div>
  );
};
