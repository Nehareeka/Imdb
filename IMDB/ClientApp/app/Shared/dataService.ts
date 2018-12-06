import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { IMovie } from "./movie";

@Injectable()
export class DataService {
    constructor(private http: HttpClient) {

    }
    public movies: IMovie[] = [];

    loadMovies(): Observable<IMovie[]> {
        return this.http.get("/api/movie")
            .pipe(map((data: any[]) => {
                 this.movies = data;
                return this.movies;
            }));
    }
}