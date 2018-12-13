import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie/movieList.component';
import { AddComponent } from './movie/add.component';
import { PersonComponent } from './person/person.component';

import { DataService } from './Shared/dataService';

let route: Routes = [
    { path: "", component: MovieListComponent },
    { path: "add", component: AddComponent },
    { path: "person/:name", component: PersonComponent },
    { path: "person/:producerName", component: PersonComponent }
];

@NgModule({
  declarations: [
      AppComponent,
      MovieListComponent,
      PersonComponent,
      AddComponent
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(route,
          {
              useHash: true
             // enableTracing: true //for debugging of the routes
          }),
      FormsModule
  ],
    providers: [
        DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
