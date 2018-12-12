import { Person } from './person'

export class Cast {
    id: number;
    name: string;
}

export class Movie {
    name: string;
    producerName: Array<Person> = new Array<Person>();
    releaseYear: Date = new Date();
    plot: string;
    poster: string;
    cast: Array<Cast> = new Array<Cast>();
}
