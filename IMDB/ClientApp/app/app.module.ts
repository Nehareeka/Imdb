import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie/movieList.component';
import { DataService } from './Shared/dataService';

@NgModule({
  declarations: [
      AppComponent,
      MovieListComponent
  ],
  imports: [
      BrowserModule,
      HttpClientModule
  ],
    providers: [
        DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
