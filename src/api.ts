const BASE_URL = "https://swapi.dev/api/films/"
/*
films/ -- get all the film resources
films/:id/ -- get a specific film resource
films/schema/ -- view the JSON schema for this resource
*/
function wait(delay: number) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

export function get<T>(): Promise<T> {
  return wait(500)
    .then(() => fetch(BASE_URL))
    .then((response) => response.json());
}
