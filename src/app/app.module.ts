import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { MovieComponent } from './shared/components/movie/movie.component';
import {MoviesService} from './shared/services/movies.service';
import {FormsModule} from '@angular/forms';
import {SearchPipe} from './shared/pipes/search.pipe';
import {FilterPipe} from './shared/pipes/filter.pipe';
import {ImagePathPipe} from './shared/pipes/image-path.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    MoviePageComponent,
    MovieComponent,
    SearchPipe,
    FilterPipe,
    ImagePathPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
