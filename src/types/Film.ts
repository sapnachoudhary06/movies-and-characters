export interface Film {
  title: string,
  characters: string[],
  release_date: number,
}

export interface ApiResourceList {
  count: number,
  next: string,
  previous: string,
  results: Film[],
}
