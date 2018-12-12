import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie/movieList.component';
import { PersonComponent } from './person/person.component';

import { DataService } from './Shared/dataService';

let route: Routes = [
    { path: "", component: MovieListComponent },
    { path: "person/:name", component: PersonComponent },
    { path: "person/:producerName", component: PersonComponent }
];

@NgModule({
  declarations: [
      AppComponent,
      MovieListComponent,
      PersonComponent
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(route,
          {
              useHash: true
             // enableTracing: true //for debugging of the routes
          })
  ],
    providers: [
        DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
