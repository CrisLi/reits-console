import { Pipe, PipeTransform } from '@angular/core';
import { Address } from '../models/data-model';

@Pipe({name: 'address'})
export class AddressPipe implements PipeTransform {

  transform(address: Address): any {
    return `${address.street}, ${address.city}, ${address.state}`;
  }

}
