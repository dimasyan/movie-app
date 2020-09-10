import {Component, OnInit} from '@angular/core';
import {MoviesService} from '../shared/services/movies.service';
import {Movie} from '../shared/interfaces';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  movies: Array<Movie>;
  genres: object;
  searchStr = '';
  genresChecked = [];

  constructor(
    private service: MoviesService
  ) {
  }

  ngOnInit(): void {
    this.movies = this.service.getMovies();
    this.genres = this.service.getGenres();
  }

  objectKeys(obj) {
    return Object.keys(obj);
  }

  updateChecked(genre): void {
    if (this.genresChecked.includes(genre)) {
      this.genresChecked.splice(this.genresChecked.indexOf(genre), 1);
    } else {
      this.genresChecked.push(genre);
    }
  }
}
