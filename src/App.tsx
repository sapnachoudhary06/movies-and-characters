import React, { useCallback, useEffect, useMemo, useState } from "react";
import { get } from "./api";
import { FilmCard } from "./components/FilmCard";
import { FilmsList } from "./components/FilmsList";
import { ApiResourceList, Film } from "./types/Film";
import { convertDateToYear } from "./utils";

export const App = () => {
  const [films, setFilms] = useState<Film[]>([]);
  const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);

  const fetchFilms = useCallback(async () => {
    const fetchedFilms = await get<ApiResourceList>();
    setFilms(fetchedFilms.results);
  }, []);

  useEffect(() => {
    fetchFilms();
  }, []);

  const sortedFilms = useMemo(() => {
    return [...films].sort((film1, film2) => convertDateToYear(film1.release_date) - convertDateToYear(film2.release_date));
  }, [films]);

  return (
    <>
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
