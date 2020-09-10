import {Injectable} from '@angular/core';
import {movies} from './movie.mock-data';
import {genreType, GenreType, Movie} from '../interfaces';

@Injectable()
export class MoviesService {
  private movies = movies;
  private genres = genreType;

  getMovies(): Array<Movie> {
    return this.movies;
  }

  getGenres() {
    return this.genres;
  }

  getMovie(id: number): Movie {
    return this.movies.find(movie => movie.id === id);
  }

  getMoviesByGenre(activeMovie: Movie): Array<Movie> {
    return this.movies.filter(movie =>
      movie.id !== activeMovie.id &&
      movie.genres.some(g => activeMovie.genres.includes(g))
    );
  }
}
