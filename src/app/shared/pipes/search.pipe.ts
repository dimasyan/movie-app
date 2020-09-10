import {Pipe, PipeTransform} from '@angular/core';
import {Movie} from '../interfaces';

@Pipe({
  name: 'searchMovies'
})
export class SearchPipe implements PipeTransform{
  transform(movies: Array<Movie>, search = ''): Array<Movie> {
    if (!search.trim()) {
      return movies;
    }

    return movies.filter(movie => {
      return movie.name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
    });
  }
}
