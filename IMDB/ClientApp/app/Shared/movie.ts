import { Person } from './person'

export class Movie {
    name: string;
    producer:  Person=new Person();
    releaseYear: Date = new Date();
    plot: string;
    poster: string;
    cast: Array<Person> = new Array<Person>();
}
