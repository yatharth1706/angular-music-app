import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterParam: string, propName: string): any {
    if( value.length === 0 || filterParam === ''){
      return value;
    }
    let results = [];
    for(let p of value){
      if(p['propName'] === filterParam){
        results.push(p);
      }
    }
    return results;
  }

}
