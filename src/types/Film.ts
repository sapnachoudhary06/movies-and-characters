export interface Film {
  title: string,
  characters: string[],
  release_date: string,
}

export interface ApiResourceList {
  count: number,
  next: string,
  previous: string,
  results: Film[],
}

export interface Character {
  name: string,
}
