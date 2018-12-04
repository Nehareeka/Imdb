import { Component } from "@angular/core";

@Component({
    selector: "movie-list",
    templateUrl: "movieList.component.html",
    styleUrls: []
})
export class MovieListComponent {
    public movies = [
        {
            title: "Avatar",
            year: "1999"
        },
        {
            title: "Raid",
            year: "2018"
        },
        {
            title: "Rustom",
            year: "2016"
        }];
}