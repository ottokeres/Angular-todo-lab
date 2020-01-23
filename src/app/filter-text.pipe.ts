import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterTextPipe implements PipeTransform {

  transform(items: any[], prop:string, searchTask: string): any[] {
    if(!items) return [];
    if(!searchTask) return items;

  searchTask = searchTask.toLowerCase();

  return items.filter( it => {
      return it[prop].toLowerCase().includes(searchTask);
    });
   }

}
