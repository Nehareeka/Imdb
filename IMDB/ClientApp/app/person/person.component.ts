import { Component, OnInit } from "@angular/core";
import { DataService } from "../Shared/dataService";
import { ActivatedRoute } from '@angular/router';
import { Person } from '../Shared/person';

@Component({
    selector: "person-detail",
    templateUrl: "person.component.html",
    styleUrls: []
})
export class PersonComponent implements OnInit{

    person: Person = new Person();
    input: any;
    constructor(private data: DataService, private _route: ActivatedRoute,) { }
    
    ngOnInit(): void {
        
        this._route.params.subscribe(params => {
            this.input = params['name'];
        });
        this.input = this.isJSON(this.input);
    }

    getPerson(name: string) {
        this.data.loadActorDetails(name)
            .subscribe(data=> this.person=data);
    }

    isJSON(data) {
        try {
            this.person = JSON.parse(data);
        } catch (e) {
            return this.getPerson(data);
        }
    }
}