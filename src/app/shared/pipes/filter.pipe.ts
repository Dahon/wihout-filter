import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(Results: any[], TransTypes: string[]): any {
  	console.log(TransTypes);
    if(!TransTypes || TransTypes.length === 0) return Results;
    console.log(Results.filter(item =>{TransTypes.includes(item.transplantation); }));
  }
}
