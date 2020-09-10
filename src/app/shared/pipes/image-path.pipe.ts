import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'imgPath'
})
export class ImagePathPipe implements PipeTransform{
  transform(fileName: string): string {
    return `/assets/images/movie-covers/${fileName}`;
  }
}
