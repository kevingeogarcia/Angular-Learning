import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Pipe({
  name: 'domseguromoreparameters'
})
export class DomSeguroPipeMoreParameters implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) { }

  transform(value: string, url: string, parameters: String): any {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value + parameters);
  }


}
