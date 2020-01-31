import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './content-card/content-card-helper';
import {log} from 'util';

@Pipe({
  name: 'defaultType'
})
export class DefaultTypePipe implements PipeTransform {

  transform(content: Content[], defaultType: string): Content[] {
    return content.filter(b => b.type === defaultType);
  }
}
