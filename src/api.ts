const BASE_URL = "https://swapi.dev/api/films/"
/*
films/ -- get all the film resources
films/:id/ -- get a specific film resource
films/schema/ -- view the JSON schema for this resource
*/
function wait(delay: number) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

export function get<T>(url: string = BASE_URL): Promise<T> {
  return wait(500)
    .then(() => fetch(url))
    .then((response) => response.json());
}
