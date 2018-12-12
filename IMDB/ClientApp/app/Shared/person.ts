export class MovieData {
    id: number;
    name: string;
}

export class Person {
    id: number;
    name: string;
    sex: string;
    dob: Date= new Date();
    bio: string;
    movies: Array<MovieData>=new Array<MovieData>();
}