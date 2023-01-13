import React, { useCallback, useEffect, useState } from "react";
import { get } from "./api";
import { ApiResourceList, Film } from "./types/Film";

export const App = () => {
  const [films, setFilms] = useState<Film[]>([]);

  const fetchFilms = useCallback(async () => {
    const fetchedFilms = await get<ApiResourceList>();
    setFilms(fetchedFilms.results);
  }, []);

  useEffect(() => {
    fetchFilms();
  }, []);

  console.log('printing films', films);

  return (
    <h1>Hello movie lovers!</h1>
  );
};
