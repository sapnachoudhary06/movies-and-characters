import React, { useCallback, useEffect, useMemo, useState } from "react";
import { get } from "./api";
import { FilmCard } from "./components/FilmCard";
import { FilmsList } from "./components/FilmsList";
import { Loader } from "./components/Loader";
import { ApiResourceList, Film } from "./types/Film";
import { convertDateToYear } from "./utils";

export const App = () => {
  const [films, setFilms] = useState<Film[]>([]);
  const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);


  const fetchFilms = useCallback(async () => {
    setIsError(false);
    try {
      setIsLoading(true);
      const fetchedFilms = await get<ApiResourceList>();
      setFilms(fetchedFilms.results);
    } catch(error) {
      setIsError(true);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchFilms();
  }, []);

  const sortedFilms = useMemo(() => {
    return [...films].sort((film1, film2) => convertDateToYear(film1.release_date) - convertDateToYear(film2.release_date));
  }, [films]);

  return (
    <>
      {isLoading && (
        <Loader />
      )}

      {!selectedFilm && (
        <FilmsList
        films={sortedFilms}
        onSelectFilm={setSelectedFilm}
      />
      )}

      {selectedFilm && (
        <FilmCard
          film={selectedFilm}
          deselectFilm={setSelectedFilm}
        />
      )}
    </>
  );
};
