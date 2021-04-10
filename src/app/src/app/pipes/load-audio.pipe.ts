import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'loadAudio'
})
export class LoadAudioPipe implements PipeTransform {

  constructor( private domSanitizer: DomSanitizer ){ }

  transform(value: string): any {
    let url = 'https://open.spotify.com/embed?uri=';
    return this.domSanitizer.bypassSecurityTrustResourceUrl( url + value );
  }

}
