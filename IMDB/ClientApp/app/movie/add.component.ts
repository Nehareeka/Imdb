import { Component, OnInit } from '@angular/core';
import { DataService } from '../Shared/dataService';
import { Movie } from '../Shared/movie';
import {Router } from "@angular/router";

@Component({
    selector: 'add-movie',
    templateUrl: 'add.component.html',
    styleUrls:[]
})
export class AddComponent implements OnInit{

    private movie: Movie=new Movie();
    constructor(private data: DataService, private router: Router) { }

    ngOnInit(): void {
        
    }

    onSubmit() {

    }
}