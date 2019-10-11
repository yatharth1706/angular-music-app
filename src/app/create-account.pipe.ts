import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'createAccount'
})
export class CreateAccountPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
