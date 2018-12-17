import { Component, OnInit } from '@angular/core';
import { DataService } from '../Shared/dataService';
import { Movie } from '../Shared/movie';
import {Router } from "@angular/router";
import { Person } from "../Shared/person";

@Component({
    selector: 'add-movie',
    templateUrl: 'add.component.html',
    styleUrls:[]
})
export class AddComponent implements OnInit{

    movie: Movie = new Movie();
    message: string;
    producerList: Person[] = [];
    actorList: Person[] = [];
    constructor(private data: DataService, private router: Router) { }

    ngOnInit(): void {
        this.data.loadPerson("actor")
            .subscribe(success=> this.actorList=success);
        this.data.loadPerson("producer")
            .subscribe(success => this.producerList = success);
    }

    onSubmit() {
        let movieData = this.movie;

        this.data.addNewMovie(JSON.stringify(movieData))
            .subscribe(success => this.message = "The movie details has been successfully added.");
    }
}