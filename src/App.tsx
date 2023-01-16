import React, { useCallback, useEffect, useMemo, useState } from "react";
import { get } from "./api";
import { FilmCard } from "./components/FilmCard";
import { FilmsList } from "./components/FilmsList";
import { Loader } from "./components/Loader";
import { ApiResourceList, Film } from "./types/Film";
import { convertDateToYear } from "./utils";
import './App.scss';

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
    <div className="box">
      <a
        href="#"
        className="logo"
        onClick={() => setSelectedFilm(null)}
      >
        <div className="image is-128x128">
          <div className="logo__image" />
        </div>
      </a>

      {selectedFilm
        ? (
          <FilmCard
            film={selectedFilm}
            deselectFilm={setSelectedFilm}
          />
        )
        : (
          <div className="block">
            {isLoading && (
              <Loader />
            )}

            {isError && (
              <p className="notification is-danger">
                Something went wrong.
              </p>
            )}

            {(sortedFilms.length === 0) && !isError && !isLoading && (
              <p>
                There are no films on the server.
              </p>
            )}

            {(sortedFilms.length > 0) && !isLoading && (
              <FilmsList
                films={sortedFilms}
                onSelectFilm={setSelectedFilm}
              />
            )}
          </div>
        )
      }
    </div>
  );
};
