import { Component, OnInit } from "@angular/core";
import { DataService } from "../Shared/dataService";
import { IMovie } from "../Shared/movie";

@Component({
    selector: "movie-list",
    templateUrl: "movieList.component.html",
    styleUrls: ["movieList.component.css"]
})
export class MovieListComponent implements OnInit{
   
    constructor(private data: DataService) {
        this.movies = data.movies;
    }

    public movies: IMovie[] = [];

    ngOnInit(): void {
        this.data.loadMovies()
            .subscribe(data => {
                    if (data) {
                        this.movies = data;
                    }
                }
            );
    }
}