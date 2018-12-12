import { Component, OnInit, Input } from "@angular/core";
import { DataService } from "../Shared/dataService";
import { Movie } from "../Shared/movie";

@Component({
    selector: "movie-list",
    templateUrl: "movieList.component.html",
    styleUrls: ["movieList.component.css"]
})
export class MovieListComponent implements OnInit{
   @Input() name:string;
    constructor(private data: DataService) {
        this.movies = data.movies;
    }

    public movies: Movie[] = [];

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