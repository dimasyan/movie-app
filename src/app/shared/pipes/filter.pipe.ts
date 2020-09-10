import {Pipe, PipeTransform} from '@angular/core';
import {GenreType, Movie} from '../interfaces';

@Pipe({
  name: 'filterMovies',
  pure: false
})
export class FilterPipe implements PipeTransform{
  transform(movies: Array<Movie>, filters = []): Array<Movie> {
    if (filters.length === 0) {
      return movies;
    }

    return movies.filter(movie => {
      return movie.genres.some(g => filters.includes(g));
    });
  }
}
