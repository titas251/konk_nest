//import IAuthor from './IAuthor';

export enum Genre {
  'DRAMA' = 'drama',
  'ACTION' = 'action',
  'FANTASY' = 'fantasy',
}

export enum Country {
  'US' = 'US',
  'UK' = 'UK',
  'FRANCE' = 'France',
}

export interface IMovie {
  id: string;
  director: string;
  genres: Genre[];
  title: string;
  country: Country;
  duration: number;
  rating: number;
  //authors: IAuthor[];
}
