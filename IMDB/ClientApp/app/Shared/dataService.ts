import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { Movie } from "./movie";
import { Person } from "./person";

@Injectable()
export class DataService {
    constructor(private http: HttpClient) {

    }
    public movies: Movie[] = [];
    public person: Person;

    loadMovies(): Observable<Movie[]> {
        return this.http.get("/api/movie")
            .pipe(map((data: any[]) => {
                this.movies = data;
                return this.movies;
            }));
    }

    loadActorDetails(name: string): Observable < Person > {
        return this.http.get("/api/actor/"+name)
            .pipe(map((data: any) => {
                this.person = data;
                return this.person;
            }));
    }

    addNewMovie(movie: string): Observable<boolean> {
        return this.http.post("/api/movie", movie, { headers: {
                'Content-Type': 'application/json'
            }})
            .pipe(map((data: any) => {
                return data;
            }));
    }

    loadPerson(person: string): Observable<Person[]> {
        return this.http.get("/api/"+person)
            .pipe(map((data: any) => {
                return data;
            }));
    }
    
}