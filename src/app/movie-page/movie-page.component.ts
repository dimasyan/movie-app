import {Component, OnInit} from '@angular/core';
import {MoviesService} from '../shared/services/movies.service';
import {Movie} from '../shared/interfaces';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent implements OnInit {

  movie: Movie;
  recommendedMovies: Array<Movie>;

  constructor(
    private service: MoviesService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const key = 'id';
      this.movie = this.service.getMovie(parseInt(params[key], 10));
      this.recommendedMovies = this.service.getMoviesByGenre(this.movie);
    });
  }

}
